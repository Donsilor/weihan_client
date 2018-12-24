<template>
  <div>
    <top-bar :newSchool="true"></top-bar>
    <search-bar></search-bar>
    <operate-bar :deleteBtn="true"></operate-bar>
    <div class="tableWrap">
      <el-table ref="multipleTable" :data="informationList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="考试顺序" prop="order" class="order"></el-table-column>
        <el-table-column label="考试编号" prop="number" class="number"></el-table-column>
        <el-table-column label="考试名称" prop="name" class="name"></el-table-column>
        <el-table-column label="焊接类型" prop="weld_type" class="weld_type"></el-table-column>
        <el-table-column label="接头类型" prop="splice_type" class="splice_type"></el-table-column>
        <el-table-column label="焊接位置" prop="weld_location" class="weld_location"></el-table-column>
        <el-table-column label="母材类型" prop="base_type" class="base_type"></el-table-column>
        <el-table-column label="母材间隙" prop="base_interval" class="base_interval"></el-table-column>
        <el-table-column label="母材厚度" prop="base_thickness" class="base_thickness"></el-table-column>
        <el-table-column label="公差" prop="tolerance" class="tolerance"></el-table-column>
        <el-table-column label="有效时间段" prop="valid_time" class="valid_time" width="200"></el-table-column>
        <el-table-column label="考试时长" prop="exam_time" class="exam_time"></el-table-column>
        <el-table-column label="状态" prop="status" class="status"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <a href="javascript:">发布</a>
          </template>
        </el-table-column>
      </el-table>
      <paging></paging>
    </div>

    <!-- <div class="studentInformation">
      <el-table ref="multipleTable" :data="informationList" style="width: 100%"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column label="姓名" prop="name" class="name"></el-table-column>
        <el-table-column label="专业" prop="number" class="number"></el-table-column>
        <el-table-column label="年级" prop="grade" class="grade"></el-table-column>
        <el-table-column label="班级" prop="class" class="class"></el-table-column>
        <el-table-column label="完成情况" prop="finish" class="finish"></el-table-column>
        <el-table-column label="操作得分" prop="candle_score" class="candle_score"></el-table-column>
        <el-table-column label="外观得分" prop="appearance_score" class="appearance_score"></el-table-column>
        <el-table-column label="质量得分" prop="quality_score" class="quality_score"></el-table-column>
        <el-table-column label="综合得分" prop="synthesize_score" class="synthesize_score"></el-table-column>
      </el-table>
      <paging></paging>
    </div> -->


    <!-- 新建弹窗开始 -->
    <div class="maskLayer">
      <div class="wrap">
        <div class="title">
          <span class="fl">新建考试</span>
          <span class="fr">X</span>
        </div>
        <div class="content">
            <ul>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;考试名称：</div>
                <div><input type="text"></div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;有效时段：</div>
                <div class="time_quantum">
                  <input type="text" class="fl">
                  <span class="fl">—</span>
                  <input type="text" class="fr">
                </div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;考试时长：</div>
                <div><input type="text"></div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊接类型：</div>
                <div>
                  <select name="">
                    <option value=""></option>
                    <option value="">1111</option>
                    <option value="">2222</option>
                    <option value="">3333</option>
                    <option value="">4444</option>
                    <option value="">5555</option>
                  </select>
                </div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;接头类型：</div>
                <div>
                  <select name="">
                    <option value=""></option>
                    <option value="">1111</option>
                    <option value="">2222</option>
                    <option value="">3333</option>
                    <option value="">4444</option>
                    <option value="">5555</option>
                  </select>
                </div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊接位置：</div>
                <div>
                  <select name="">
                    <option value=""></option>
                    <option value="">1111</option>
                    <option value="">2222</option>
                    <option value="">3333</option>
                    <option value="">4444</option>
                    <option value="">5555</option>
                  </select>
                </div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;母材材料：</div>
                <div>
                  <select name="">
                    <option value=""></option>
                    <option value="">1111</option>
                    <option value="">2222</option>
                    <option value="">3333</option>
                    <option value="">4444</option>
                    <option value="">5555</option>
                  </select>
                </div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;母材厚度：</div>
                <div><input type="text" class="width">mm</div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;母材间隙：</div>
                <div><input type="text" class="width">mm</div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;电压：</div>
                <div><input type="text" class="width">v</div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊丝/焊条类型：</div>
                <div>
                  <select name="">
                    <option value=""></option>
                    <option value="">1111</option>
                    <option value="">2222</option>
                    <option value="">3333</option>
                    <option value="">4444</option>
                    <option value="">5555</option>
                  </select>
                </div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;焊丝/焊条直径：</div>
                <div><input type="text" class="width">mm</div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;公差：</div>
                <div><input type="text" class="width">%</div>
              </li>
              <li>
                <div><i class="el-icon-star-on"></i>&nbsp;&nbsp;训练次数：</div>
                <div><input type="text" class="width">次</div>
              </li>
            </ul>
            <div class="btn_wrap clf">
              <button class="fr">取消</button>
              <button class="fr">确定</button>
              <button class="fr">下一步</button>
            </div>
        </div>
      </div>
    </div>
    <!-- 新建弹窗结束 -->
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'
import SearchBar from 'components/searchBar/SearchBar'
import OperateBar from 'components/operateBar/OperateBar'
import Paging from 'components/paging/Paging'

export default {
  name: 'schoolInfo',
  components: {
    TopBar,
    SearchBar,
    OperateBar,
    Paging
  },
  data () {
    return {
      // 全选
      ifAllSelect: false,
      informationList: [
        {
          ifSelect: false,
          order: '1',
          number: '003309',
          name: '实操1',
          weld_type: 'SMAW',
          splice_type: '平板对接',
          weld_location: '平焊',
          base_type: '不锈钢',
          base_interval: '3mm',
          base_thickness: '3mm',
          tolerance: '3%',
          valid_time: '11:12:13',
          exam_time: '30分钟',
          status: '未发布',
          handle: '发布'
        },
        {
          ifSelect: false,
          order: '2',
          number: '003312',
          name: '实操2',
          weld_type: 'CO2',
          splice_type: '平板对接',
          weld_location: '平焊',
          base_type: '不锈钢',
          base_interval: '5mm',
          base_thickness: '5mm',
          tolerance: '2%',
          valid_time: '11:12:13',
          exam_time: '30分钟',
          status: '已发布',
          handle: '截止'
        },
        {
          ifSelect: false,
          order: '3',
          number: '003314',
          name: '实操3',
          weld_type: 'TIG',
          splice_type: '平板对接',
          weld_location: '平焊',
          base_type: '不锈钢',
          base_interval: '2mm',
          base_thickness: '2mm',
          tolerance: '5%',
          valid_time: '11:12:13',
          exam_time: '30分钟',
          status: '已截止',
          handle: '各学员成绩详情'
        }
      ]
    }
  },
  methods: {
    select (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
      this.ifAllSelect = !this.ifAllSelect
      // this.informationList.map(o => this.ifAllSelect === true ? o.ifSelect = true : o.ifSelect = false)
    },
    formatServeUrl (row) {
      return <a href={row.url} target="_blank">{row.url}</a>
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }

}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.wrap
    position absolute
    left 50%
    top 50%
    transform translate(-50%,-50%)
    -ms-transform translate(-50%,-50%)
    -webkit-transform translate(-50%,-50%)
    width 500px

    .title
      width 100%
      height 42px
      background-color #34a5dd
      padding 0 5%
      line-height 42px
      color #fff

      .fr
        font-size 22px

    .content 
      width 100%
      background-color #fff
      padding 20px 7% 20px 3%

      ul
        width 100%

        li
          height 26px
          width 100%
          margin-bottom 10px
          font-size 0

        li div
          display inline-block
          vertical-align top

        li div.time_quantum input
          width 45% !important 

        li div.time_quantum span
          width 10%
          height 26px
          line-height 26px
          text-align center
           
        li div:first-child
          width 31%
          height 100%
          font-size 14px
          text-align right
          line-height 30px

        li div:last-child
          width 69%
          height 100%
          font-size 14px
          color #999

        li div:last-child input
            width 100%
            height 22px
            margin-top 4px
            border 1px solid #ccc
          
        li div:last-child input.width
            width 86%
            margin-right 3%

        li div:last-child select
            width 100%

      .btn_wrap
        width 100%
        margin-top 20px

        button
          width 70px
          height 30px
          background-color #34a5dd
          font-size 14px
          color #fff
          margin-left 20px
          border-radius 4px

        button:first-child
          background-color #fff
          border 1px solid #34a5dd
          color #34a5dd
</style>
