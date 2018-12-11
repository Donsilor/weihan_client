<template>
  <div>
    <!-- 文件头 -->
    <hfold :idx="5" :title="video_info.title"></hfold>
    <div class="box clf">
      <div class="banner">
        <div class="player">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
            @play="onPlayerPlay($event)"
            @pause="onPlayerPause($event)"
          ></video-player>
        </div>
      </div>
      <!--视频-->
      <div class="introduction clf">
        <p class="title">简介</p>
        <span>演示：{{video_info.author}}</span>
        <span>焊接类型：{{video_info.tag}}</span>
        <span>接头类型：{{video_info.headType}}</span>
        <span>母材间隙：{{video_info.mGap}}</span>
        <span v-show="showmore">更多：.....</span>
        <a href="javascript:" class="expansion" @click="showmore=!showmore">{{showmore?'收齐':'展开更多'}}</a>
      </div>
      <!--简介-->
      <div class="review clf">
        <p class="title fl">留言</p>
        <p class="my_more fr">
          <a href="javascript:" class="my">我的</a>
          <span>/</span>
          <a href="javascript:" class="more">更多</a>
        </p>
        <div class="review-content-box">
          <textarea cols="30" rows="10"></textarea>
          <a href="javascript:" class="review-btn fr">发表留言</a>
          <div
            class="review-content clf"
            v-for="(item,index) in comment"
            :value="index"
            :key="index"
          >
            <!-- 头像 -->
            <a href="javascript:" class="user-image fl"></a>
            <div class="cont-right clf fr">
              <p class="user-name">{{item.name}}</p>
              <p class="question">{{item.info}}</p>
              <div class="reply" v-for="(ite,idx) in item.reply" :value="idx" :key="idx">
                <a href="javascript:" class="reply-username">{{ite.name}}：</a>
                <span>{{ite.info}}</span>
                <span class="reply-time">{{ite.date}}</span>
              </div>
              <div class="review-bot">
                <span class="review-time fl">{{item.date}}</span>
                <a href="javascript:" class="review-icon fr"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="nomore">没有更多了</p>
    </div>
  </div>
</template>

<script>
import hfold from "../components/hfold";
import { videoPlayer } from "vue-video-player";
export default {
  name: "video_details",
  components: {
    hfold,
    videoPlayer
  },
  data() {
    return {
      video_info: {
        title: "虚拟焊接",
        author: "张起灵",
        tag: "smaw",
        headType: "平板类型",
        mGap: "3mm"
      },
      // 我的留言
      my_comment: null,
      // 评论
      comment: [
        {
          icon: "",
          name: "张三",
          date: "2018-12-4",
          info: "留言正文，正文问我呢我呢我呢我能玩e",
          reply: [
            {
              icon: "",
              name: "张三",
              info: "留言正文，正文问我呢我呢我呢我能玩e",
              date: "2018-12-4"
            },
            {
              icon: "",
              name: "张三",
              info: "留言正文，正文问我呢我呢我呢我能玩e",
              date: "2018-12-4"
            }
          ]
        },
        {
          icon: "",
          name: "张三1",
          date: "2018-12-3",
          info: "留言正文，正文问我呢我呢我呢我能玩e",
          reply: [
            {
              icon: "",
              name: "李四",
              info: "留言正文，正文问我呢我呢我呢我能玩e",
              date: "2018-12-4"
            }
          ]
        }
      ],
      playerOptions: {
        playbackRates: [0.1, 1.0, 1.5, 5.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4", //"video/webm", //"application/x-mpegURL",
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" //你的m3u8地址（必填）
          },
          {
            type: "video/mp4", //"video/webm", //"application/x-mpegURL",
            src:
              "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm" //你的m3u8地址（必填）
          }
          // {
          //   type: "video/mp4",s
          //   src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
          // }
        ],
        poster: "http://vjs.zencdn.net/v/oceans.png", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //时间
          durationDisplay: true, //播放时间
          remainingTimeDisplay: false, //剩余时间
          fullscreenToggle: true //全屏按钮
        }
      },
      //   显示更多
      showmore: false,
      // 视频id
      videoId: null
    };
  },
  methods: {
    backClick() {
      if (window.history.length <= 1) {
        this.$router.push("/");
        return false;
      } else {
        this.$router.go(-1);
      }
    },
    onPlayerPlay(player) {
      // this.$msgbox("play");
    },
    onPlayerPause(player) {
      // this.$msgbox("pause");
    },
    // 获取视频详情
    getVideoInfo() {
      this.$api
        .api(this.$infs.video.getVideoInfo, {}, this.videoId)
        .then(res => {
          console.log(res);
          this.playerOptions.poster = res.picStorageId;
          this.playerOptions.sources[0].src = res.videoStorageId;
        })
        .catch(res => {
          this.$msgbox("提示", res.message);
        });
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  mounted() {
    console.log(this.$route.params);
    this.videoId = this.$route.params.name;
    this.getVideoInfo();
  }
};
</script>
<style scoped>
@import "../assets/css/base.css";
@import "../assets/css/videodetails.css";
</style>