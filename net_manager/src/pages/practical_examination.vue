<template>
  <div>
    <div class="search">
      <el-select v-model="searchParams.queryType">
        <option value="1">1</option>
      </el-select>
      <el-input type="text" v-model="searchParams.key"/>
      <el-date-picker
        v-model="searchParams.times"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <el-button>搜索</el-button>
      <el-checkbox @change="e=>selectedTasks=tasks.map(o=>o.id)">全选</el-checkbox>
      <el-select v-model="searchParams.sortType">
        <option value="1">默认排序</option>
        <option value="1">正序</option>
        <option value="1">倒序</option>
      </el-select>
    </div>
    <el-table
      :show-overflow-tooltip="true"
      :data="tasks"
      :height="$window_heigh"
      border
      style="width: 100%"
    >
      <el-table-column width="50">
        <template slot-scope="scope">
          <el-checkbox :value="scope.row.id" v-model="selectedTasks" ></el-checkbox>
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
    </el-table>
  </div>
</template>
<script>
import { User, RequestParams } from "../common/entity";

export default {
  data() {
    return {
      render:false,
      tasks: new Array(20).fill({
        id: "3",
        name: "123",
        code: "1",
        weldingType: "1",
        typeConnector: "1",
        weldingPosition: "1",
        baseMetalMaterial: "1",
        baseMaterialThicknes: "1",
        baseMetalGap: "1",
        voltage: "1",
        weldingWreElectrodeType: "1",
        weldingWreElectrodeDiameter: "1",
        trainingTimes: "1",
        tolerance: "1",
        difficulty: "1",
        releaseStatus: "1",
        sort: "1",
        createTime: "2018-12-17 17:37:25",
        updateTime: "2018-12-17 17:37:34",
        releaseTime: "",
        selected:false
      }),
      searchParams: {
        times: [],
        queryType:"",
        key:null,
        sortType:""
      },
      selectedTasks:[]
    };
  },
  mounted() {
    this.queryTasks();
    this.deleleTask();
    this.insertTask();
    this.releaseTask();
  },
  methods: {
    queryTasks(pageIndex = 1){
      this.$Api.practicalExamination.task.search(new RequestParams().addAttribute("sortType", "-name")).then(response=>{
        this.tasks = response.dataItems;
      })
    },
    deleleTask(id){
      this.$Api.practicalExamination.task.delete(new RequestParams().addAttribute("id", "456")).then(response=>{
        console.log(response)
      })
    },
    updateTask(){
      this.$Api.practicalExamination.task.update(new RequestParams().addAttribute("id", "id")).then(response=>{
        console.log(response)
      })
    },
    insertTask(){
      this.$Api.practicalExamination.task.insert(new RequestParams().addAttribute("id", "id")).then(response=>{
        console.log(response)
      })
    },
    releaseTask(){
      this.$Api.practicalExamination.task.release(new RequestParams().addAttribute("id", "id")).then(response=>{
        console.log(response)
      })
    },
  },
  computed: {},
  components: {}
};
</script>

<style scoped>
</style>

