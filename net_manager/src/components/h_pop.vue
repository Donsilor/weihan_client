<template>
  <div class="pop_up" v-if="popUpShow">
    <div class="pop_content">
      <div class="name clf">
        <span class="fl">删除</span>
        <span class="fr">x</span>
      </div>
      <div class="compile">
        <!-- <p>选中数：<span>127</span></p> -->
        <!-- <p>你确定要删除这些教学类型吗？</p> -->
        <div class="del">
          <span><i class="icon iconfont icon-wujiaoxing"></i>教学类型</span>  
          <input type="text">
        </div>
        <div class="btn">
          <button class="confirm">确定</button>
          <button class="cancel">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      popUpShow: false
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pop_up{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0,0,0,.3);
  }
  .pop_content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    width: 800px;
    height: auto;
    background-color: #fff;

  }
  .name{
    height: 66px;
    line-height: 66px;
    color: #fff;
    background-color: #1c7cc3;
  }
  .name .fl{
    margin-left: 5%;
    font-size: 30px;
  }
  .name .fr{
    margin-right: 5%;
    font-size: 32px;
  }
  .compile{
    padding: 76px 80px;
  }
  .compile p:first-of-type{
    margin-bottom: 87px;
    font-size: 24px;
  }
  .compile p:last-of-type{
    padding-left: 4%;
    font-size: 32px;
  }
  .btn{
    margin-top: 88px;
    padding-left: 60%;
  }
  .btn button{
    width: 100px;
    height: 44px;
    border: 1px solid #35a5de;
    background-color: #fff;
    border-radius: 5px;
    font-size: 18px;
    color: #35a5de;
  }
  .btn .confirm{
    background-color: #35a5de;
    color: #fff;
    margin-right: 5%;
  }
  .del i{
    color: #f00;
  }
  .del input{
    width: 70%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-left: 3%;
  } 
</style>
