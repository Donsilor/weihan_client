<template>
	<div class="nav_bar">
		<ul class="clf">
			<li v-for="(item,index) in menus" :value="index" :key="index" @click="onclick(item.url,index)" :class="{'current':index === selected}">
				<a href="javascript:">
					<span class="icon"></span>
					<span class="name">{{item.name}}</span>
				</a>
			</li>
		</ul>
	</div>
</template>
 
<script type="text/javascript">
export default {
    props: ["idx"],
    mounted() {
        console.log("mune加载" + this.$glb.menu);
    },
    data() {
        return {
			selected:this.idx,
            menus: [
                {
                    name: "首页",
                    url: "/index"
                },
                {
                    name: "课件",
                    url: "/courseware"
                },
                {
                    name: "视频",
                    url: "/videos"
                },
                {
                    name: "考试",
                    url: "/tests"
                },
                {
                    name: "我的",
                    url: "/myinfo"
                }
            ]
        };
    },
    methods: {
        onclick(url, index) {
            this.$glb.menu = index;
            this.selected = index;
            this.$router.push(url);
            console.log("mune" + this.$glb.menu);
        }
    }
};
</script>
<style>
</style>
