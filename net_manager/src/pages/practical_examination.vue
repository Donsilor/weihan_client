<template>
  <div>
    <div class="search">
      <el-select v-model="searchParams.queryType">
        <el-option
          v-for="(item, index) in queryTypes"
          :key="index"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input type="text" v-model="searchParams.key"/>
      <el-date-picker
        v-model="searchParams.times"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <el-button @click="queryTasks()">搜索</el-button>
      <el-checkbox @change="e=>selectedTasks=tasks.map(o=>o.id)">全选</el-checkbox>
      <el-select v-model="searchParams.sortType">
        <el-option :selected="true" value="sort" label="默认排序"></el-option>
        <el-option value="sort" label="正序"></el-option>
        <el-option value="-sort" label="倒序"></el-option>
      </el-select>
    </div>
    <el-button @click="showTask()">新建任务</el-button>
    <el-table
      :show-overflow-tooltip="true"
      :data="tasks"
      :height="$window_heigh"
      border
      style="width: 100%"
    >
      <el-table-column width="50">
        <template slot-scope="scope">
          <el-checkbox :value="scope.row.id" v-model="selectedTasks"></el-checkbox>
        </template>
      </el-table-column>
      <el-table-column prop="sort" label="任务顺序" width="120"></el-table-column>
      <el-table-column prop="code" label="任务编号" width="120"></el-table-column>
      <el-table-column prop="name" label="任务名称" width="120"></el-table-column>
      <el-table-column prop="weldingType" label="焊接类型" width="120"></el-table-column>
      <el-table-column prop="typeConnector" label="接口类型" width="120"></el-table-column>
      <el-table-column prop="weldingPosition" label="焊接位置" width="120"></el-table-column>
      <el-table-column prop="baseMetalMaterial" label="母材材料" width="120"></el-table-column>
      <!-- <el-table-column prop="baseMaterialThicknes" label="母材厚度" width="120"></el-table-column>
      <el-table-column prop="baseMetalGap" label="母材间隙" width="120"></el-table-column>
      <el-table-column prop="weldingWreElectrodeType" label="焊丝/焊条类型" width="120"></el-table-column>
      <el-table-column prop="weldingWreElectrodeDiameter" label="焊丝/焊条直径" width="120"></el-table-column>
      <el-table-column prop="trainingTimes" label="训练次数" width="120"></el-table-column>-->
      <el-table-column prop="tolerance" label="公差" width="120"></el-table-column>
      <el-table-column prop="difficulty" label="难度" width="120"></el-table-column>
      <el-table-column prop="releaseStatus" label="发布状态" width="120"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-button @click="showTask(scope.row)">编辑</el-button>
          <el-button
            @click="showTask(scope.row.id, scope.row.releaseStatus)"
          >{{scope.row.releaseStatus?"取消发布":"发布"}}</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="新增或者修改任务" :visible.sync="taskInfo.dialog" :close-on-click-modal="false">任务名称
      <el-input type="text" placeholder="任务名称" v-model="taskInfo.name"/>任务编号
      <el-input type="text" placeholder="任务编号" v-model="taskInfo.code"/>焊接类型
      <el-input type="text" placeholder="焊接类型" v-model="taskInfo.weldingType"/>接口类型
      <el-input type="text" placeholder="接口类型" v-model="taskInfo.typeConnector"/>焊接位置
      <el-input type="text" placeholder="焊接位置" v-model="taskInfo.weldingPosition"/>母材材料
      <el-input type="text" placeholder="母材材料" v-model="taskInfo.baseMetalMaterial"/>母材厚度
      <el-input type="text" placeholder="母材厚度" v-model="taskInfo.baseMaterialThicknes"/>焊丝/焊条类型
      <el-input type="text" placeholder="焊丝/焊条类型" v-model="taskInfo.weldingWreElectrodeType"/>焊丝/焊条直径
      <el-input type="text" placeholder="焊丝/焊条直径" v-model="taskInfo.weldingWreElectrodeDiameter"/>训练次数
      <el-input type="text" placeholder="训练次数" v-model="taskInfo.trainingTimes"/>公差
      <el-input type="text" placeholder="公差" v-model="taskInfo.tolerance"/>难度
      <el-input type="text" placeholder="难度" v-model="taskInfo.difficulty"/>

      <el-button @click="taskInfo.data.id ? updateTask() : insertTask()">新增</el-button>
    </el-dialog>
  </div>
</template>
<script>
import { User, RequestParams } from "../common/entity";

export default {
  data() {
    return {
      taskInfo: {
        data: {
          id: null, //任务ID
          name: "", //任务名称
          code: "", //任务编码
          weldingType: "", //焊接类型
          typeConnector: "", //接口类型
          weldingPosition: "", //焊接位置
          baseMetalMaterial: "", //母材材料
          baseMaterialThicknes: "", //母材厚度
          baseMetalGap: "", //母材间隙
          voltage: "", //电压
          weldingWreElectrodeType: "", //焊丝/焊条类型
          weldingWreElectrodeDiameter: "", //焊丝/焊条直径
          trainingTimes: "", //训练次数
          tolerance: "", //公差
          difficulty: "", //难度
          releaseStatus: false, //发布状态
          sort: "", //
          createTime: null, //
          updateTime: "", //
          releaseTime: "" //
        },
        dialog: false
      },
      tasks: [],
      queryTypes: [],
      searchParams: {
        times: [],
        queryType: "",
        key: null,
        sortType: "-name"
      },
      selectedTasks: []
    };
  },
  async mounted() {
    this.queryTypes = await this.$api.common.uiLabels(
      new RequestParams().addAttribute("type", "taskQueryClass")
    );
    this.queryTasks();
  },
  methods: {
    showTask(item) {
      this.taskInfo.dialog = true;
      this.taskInfo = item || {};
    },
    queryTasks(pageIndex = 1) {
      this.$api.service.practical.task
        .search(
          new RequestParams()
            .addAttribute("pageSize", 5)
            .addAttribute("pageIndex", pageIndex)
            .addDateAttribute("startTime", this.searchParams.times[0])
            .addDateAttribute("endTime", this.searchParams.times[1])
            .addAttribute("queryType", this.searchParams.queryType)
            .addAttribute("key", this.searchParams.key)
            .addAttribute("sortType", this.searchParams.sortType)
        )
        .then(response => {
          this.tasks = response.dataItems;
        });
    },
    deleleTask(id) {
      this.$api.service.practical.task
        .delete(new RequestParams().addAttribute("id", "456"))
        .then(response => {
          console.log(response);
        });
    },
    upsertTask() {
      this.$api.service.practical.task
        .upsert(new RequestParams().addAttributes(this.taskInfo.data))
        .then(response => {
          console.log(response);
        });
    },
    releaseTask(id, status) {
      this.$api.service.practical.task
        .release(
          new RequestParams()
            .addAttribute("releaseStatus", !!status)
            .addAttribute("id", id)
        )
        .then(response => {
          console.log(response);
        });
    }
  },
  computed: {},
  components: {}
};
</script>

<style scoped>
</style>

