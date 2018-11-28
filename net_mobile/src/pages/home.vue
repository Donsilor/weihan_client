<template>
    <div>
        <!-- 文件头 -->
        <hfold :idx='$glb.menu'></hfold>
        <router-view></router-view>
        <!-- 菜单 -->
        <bmenu :idx='$glb.menu'></bmenu>

    </div>
</template>
<script>
import bmenu from "../components/bmenu";
import hfold from "../components/hfold";
export default {
    name: "home",
    components: {
        bmenu,
        hfold
    },
    mounted() {
        if (this.$glb.menu == 0) this.$router.push("/index");
    }
};
</script>
