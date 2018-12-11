<template>
  <div class="home">
    <htop></htop>
    <div class="mine">
        <!-- <div class="fl"> -->
            <hsidebar></hsidebar>
        <!-- </div> -->
        <div class="content">
            <router-view>
                
            </router-view>
            <!-- <esse></esse> -->
        </div>
    </div>
  </div>
</template>

<script>
import htop from "../components/h_top";
import hsidebar from "../components/h_sidebar";

export default {
  name: "home",
    components: {
        htop,
        hsidebar
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    position: fixed;
    top: 0;
    left: 15%;
    width: 85%;
    height: 100%;
    padding-top: 70px;
}
</style>
