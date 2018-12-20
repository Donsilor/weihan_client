<template>
  <div>
    <top-bar></top-bar>
    <div class="videoList clf">
      <div class="videoItem" v-for="(item, index) in videoList" :key="index">
        <div class="titleBar">
          {{item.title}}
          <i class="iconfont fullScreen" @click="fullScreenFun(index)">&#xe640;</i>
        </div>
        <div class="video">
          <video :src="item.videoSrc" :poster="item.posterUrl" controls controlsList="nodownload"
                 ref="monitoringVideo"></video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from 'components/mainTopBar/MainTopBar'

export default {
  name: '',
  components: {
    TopBar
  },
  data () {
    return {
      videoList: [
        {
          title: '作业竞赛第一组A方杨科',
          videoSrc: 'http://ceibs.54jj.cn/movie.mp4',
          posterUrl: 'http://ceibs.54jj.cn/videoPoster.jpg'
        },
        {
          title: '作业竞赛第一组A方杨科',
          videoSrc: 'http://ceibs.54jj.cn/movie.mp4',
          posterUrl: 'http://ceibs.54jj.cn/videoPoster.jpg'
        },
        {
          title: '作业竞赛第一组A方杨科',
          videoSrc: 'http://ceibs.54jj.cn/movie.mp4',
          posterUrl: 'http://ceibs.54jj.cn/videoPoster.jpg'
        },
        {
          title: '作业竞赛第一组A方杨科',
          videoSrc: 'http://ceibs.54jj.cn/movie.mp4',
          posterUrl: 'http://ceibs.54jj.cn/videoPoster.jpg'
        },
        {
          title: '作业竞赛第一组A方杨科',
          videoSrc: 'http://ceibs.54jj.cn/movie.mp4',
          posterUrl: 'http://ceibs.54jj.cn/videoPoster.jpg'
        },
        {
          title: '作业竞赛第一组A方杨科',
          videoSrc: 'http://ceibs.54jj.cn/movie.mp4',
          posterUrl: 'http://ceibs.54jj.cn/videoPoster.jpg'
        },
        {
          title: '作业竞赛第一组A方杨科',
          videoSrc: 'http://ceibs.54jj.cn/movie.mp4',
          posterUrl: 'http://ceibs.54jj.cn/videoPoster.jpg'
        },
        {
          title: '作业竞赛第一组A方杨科',
          videoSrc: 'http://ceibs.54jj.cn/movie.mp4',
          posterUrl: 'http://ceibs.54jj.cn/videoPoster.jpg'
        },
        {
          title: '作业竞赛第一组A方杨科',
          videoSrc: 'http://ceibs.54jj.cn/movie.mp4',
          posterUrl: 'http://ceibs.54jj.cn/videoPoster.jpg'
        }
      ]
    }
  },
  methods: {
    fullScreenFun (index) {
      let video = this.$refs.monitoringVideo[index]

      if(video.requestFullscreen){
        //W3C
        video.requestFullscreen();
      }else if (video.mozRequestFullScreen){
        //FIREFOX
        video.mozRequestFullScreen();
      }else if (video.webkitRequestFullScreen){
        //CHROME
        video.webkitRequestFullScreen();
      }else if (video.msRequestFullscreen){
        //MSIE
        video.msRequestFullscreen();
      }else if(element.oRequestFullscreen){
        element.oRequestFullscreen();
      }else{
        var docHtml = document.documentElement;
        var docBody = document.body;
        var videobox = document.getElementById('playerBox');
        var cssText = 'width:100%;height:100%;overflow:hidden;';
        docHtml.style.cssText = cssText;
        docBody.style.cssText = cssText;
        videobox.style.cssText = cssText+';'+'margin:0px;padding:0px;';
        document.IsFullScreen = true;
      }
    }
  }
}

</script>

<style lang="stylus" scoped>
@import "~assets/common.styl"

.videoList
  padding 1.5rem 1.625rem 0 2rem

  .videoItem
    float left
    width 23%
    border 1px solid $borderColor
    border-radius .5rem
    padding .3rem 1rem 1rem
    margin-bottom 2rem

    &:not(:nth-of-type(4n))
      margin-right 2%

    .titleBar
      font-size 1rem
      line-height 2.2rem
      position relative
      padding-right 1rem
      ellipsis()

      .fullScreen
        cursor pointer
        position absolute
        top 0
        right 0
        bottom 0

  .video
    height 0
    padding-bottom 58%
    overflow hidden
    position relative

    video
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      object-fit: fill

      &::-webkit-media-controls-fullscreen-button
        display none


</style>
