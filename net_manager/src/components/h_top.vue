<template>
  <div class="header">
    <div class="fl">
      <a href="#"><img :src = "linkerImg"></a>
    </div>
    <div class="fr">
      <span class="administrator">
        <img :src = "adminImg">
      </span>
      <span class="text">管理员</span>
      <i class="remend icon iconfont icon-tixing"></i>
      <i class="compile icon iconfont icon-xiugaimima"></i>
      <i class="quit icon iconfont icon-tuichuzhanghao"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      linkerImg:require("../assets/images/logo.png"),
      adminImg:require("../assets/images/header.png"),
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header{
    position: relative;
    z-index: 6;
    width: 100%;
    height: 72px;
    min-width: 920px;
    background-color: #fff;
    border-bottom: 2px solid #ccc;
    padding: 0 3%;
  }
  .header .fl{
    height: 72px;
  }
  .header .fl a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .header .fr i,
  .header .fr span{
    display: inline-block;
    height: 40px;
    width: 40px;
    padding-left: 2%;
    margin-top: 15px;
    vertical-align: middle;
  }
  .header .fr span.text{
    width: 66px;
    line-height: 40px;
  }
  .header .fr span.administrator{
    border-radius: 50%;
    background-color: #3ab1ed;
    text-align: center;
    padding-right: 4px;
    padding-top: 5px;
    overflow: hidden;
  }
  .header .fr span.administrator img{
    width: 60%;
    height: auto;
  }
  i{
    line-height: 40px;
    font-size: 22px;
  }
</style>
