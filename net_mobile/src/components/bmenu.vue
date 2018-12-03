<template>
	<div class="footer">
		<ul class="clf">
			<li v-for="(item,index) in menus" :value="index" :key="index" @click="onclick(item.url,index)" :class="{'current':index === selected}">
				<a href="javascript:">
					<span class="icon"><i :class="item.icon"></i></span>
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
                    icon:'iconfont icon-shouye',
                    name: "首页",
                    url: "/index"
                },
                {
                    icon:'iconfont icon-kejianku',
                    name: "课件",
                    url: "/courseware"
                },
                {
                    icon:'iconfont icon-gongxiang-',
                    name: "视频",
                    url: "/videos"
                },
                {
                    icon:'iconfont icon-kaoshier',
                    name: "考试",
                    url: "/tests"
                },
                {
                    icon:'iconfont icon-wode',
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
