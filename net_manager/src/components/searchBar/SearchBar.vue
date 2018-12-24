<template>
  <div class="searchBar clf">
    <label class="fl" v-if="option.queryTypes">
      <select v-for="(item, index) in option.queryTypes" :key="index" v-model="item.selected">
        <option v-for="(v, k) in item.types" :key="v" :value="v">{{k}}</option>
      </select>
    </label>
    <!-- <label>
      <select name="" class="filter fl">
        <option value="">筛选条件</option>
        <option value="">用户条件</option>
        <option value="">用户ID</option>
        <option value="">用户名</option>
        <option value="">昵称</option>
        <option value="">真实姓名</option>
      </select>
    </label>-->
    <!-- <div class="search fl" v-if="option.searchModule">
      <input type="text" placeholder="项目名称和编号">
      <i class="iconfont">&#xe65c;</i>
      <button>搜索</button>
    </div>
    <div class="timeQuantumSearch fl" v-if="option.timeQuantumSearchModule">
      <el-date-picker
        v-model="timeQuantum"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <button>搜索</button>
    </div>-->
    <div class="inquireModule fl">
      <label v-for="(item, index) in option.queryKeys" :key="index" v-if="option.queryKeys">
        <span>{{item.title}}：</span>
        <el-input size="mini" :placeholder="item.placeholder" clearable v-model="item.value"></el-input>
      </label>
      <el-date-picker
        v-if="option.times"
        v-model="option.times"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      ></el-date-picker>
      <!-- <label >
        <span>姓名：</span>
        <el-input size="mini" placeholder="请输入内容" clearable></el-input>
      </label>-->
      <button v-if="option.queryKeys">搜索</button>
    </div>
    <label v-if="option.querySortType">
      <select class="sort fr" v-model="option.querySortType.selected">
        <option v-for="(v, k) in option.querySortType.types" :key="v" :value="v">{{k}}</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  model: {
    prop: "option"
  },
  props: {
    option: {
      type: Object,
      default(){
        return {
          // queryTypes: {
        //   asd1: {
        //     title: "asd1",
        //     types: {
        //       金属材料焊接1: 1,
        //       金属材料焊接2: 2,
        //       金属材料焊接3: 3,
        //       金属材料焊接4: 4
        //     },
        //     selected: ""
        //   },
        //   asd2: {
        //     title: "asd2",
        //     types: {
        //       金属材料焊接1: 1,
        //       金属材料焊接2: 2,
        //       金属材料焊接3: 3,
        //       金属材料焊接4: 4
        //     },
        //     selected: ""
        //   },
        //   asd3: {
        //     title: "asd3",
        //     types: {
        //       金属材料焊接1: 1,
        //       金属材料焊接2: 2,
        //       金属材料焊接3: 3,
        //       金属材料焊接4: 4
        //     },
        //     selected: ""
        //   }
        // },
        // queryKeys: {
        //   asd1: {
        //     title: "asd1",
        //     placeholder: "123415",
        //     value: null
        //   },
        //   asd2: {
        //     title: "asd2",
        //     placeholder: "123415",
        //     value: null
        //   },
        //   asd3: {
        //     title: "asd3",
        //     placeholder: "123415",
        //     value: null
        //   }
        // },
        // querySortType: {
        //   selected: null,
        //   types: {
        //     排序1: "-name",
        //     排序2: "name"
        //   }
        // },
        // times: [],
        // videoDatabaseModule: false,
        // searchModule: true,
        // timeQuantumSearchModule: false,
        // inquire: false,
        // inquireName: false
        }
      }
    }
  },
  data() {
    return {
      timeQuantum: "",
      inquireTimeQuantum: ""
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/common.styl';

.searchBar {
  font-size: 0.75rem;
  line-height: 1.875rem;
  padding: 1.5rem 4.375rem 1.5rem 1.25rem;

  select, input {
    width: 7.5rem;
    height: 1.625rem;
    border: 1px solid $borderColor;
    margin: 0.125rem 1.75rem 0.125rem 0;
  }

  input {
    padding: 0 0.5rem;
  }

  .search {
    position: relative;

    input[type=text] {
      float: left;
      width: 16.25rem;
      height: 1.875rem;
      font-size: 0.75rem;
      padding-left: 1.5rem;
      border: 1px solid $borderColor;
    }

    .iconfont {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 1.875rem;
      height: 1.875rem;
      text-align: center;
      line-height: 1.875rem;
    }
  }

  .timeQuantumSearch {
    margin-left: 28px;
  }

  button {
    width: 3.75rem;
    height: 1.625rem;
    border: 1px solid $borderColor;
    font-size: 0.75rem;
    border-radius: 5px;
    background: none;

    &:active {
      background-color: #999;

      &:active {
        background-color: #999;
      }
    }
  }

  select.sort {
    width: 7.5rem;
    height: 1.625rem;
    border: 1px solid $borderColor;
    margin: 0.125rem 0;
  }
}

select {
  font-size: 12px;
}
</style>
<style lang="stylus">
@import '~assets/common.styl';

.searchBar {
  font-size: 0.75rem;
  line-height: 1.875rem;
  padding: 1.5rem 4.375rem 1.5rem 1.25rem;

  select, input {
    width: 7.5rem;
    height: 1.625rem;
    border: 1px solid $borderColor;
    margin: 0.125rem 1.75rem 0.125rem 0;
  }

  input {
    padding: 0 0.5rem;
  }

  .search {
    position: relative;

    input[type=text] {
      float: left;
      width: 16.25rem;
      height: 1.875rem;
      font-size: 0.75rem;
      padding-left: 1.5rem;
      border: 1px solid $borderColor;
    }

    .iconfont {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 1.875rem;
      height: 1.875rem;
      text-align: center;
      line-height: 1.875rem;
    }
  }

  .timeQuantumSearch {
    margin-left: 28px;
  }

  button {
    width: 3.75rem;
    height: 1.625rem;
    border: 1px solid $borderColor;
    font-size: 0.75rem;
    border-radius: 5px;
    background: none;

    &:active {
      background-color: #999;

      &:active {
        background-color: #999;
      }
    }
  }

  select.sort {
    width: 7.5rem;
    height: 1.625rem;
    border: 1px solid $borderColor;
    margin: 0.125rem 0;
  }
}

select {
  font-size: 12px;
}
</style>
