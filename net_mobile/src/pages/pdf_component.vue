<template>
  <div id="pdf_scroll">
    <div class="foot">
      <a href="javascript:" @click="onClickBack">返回</a>
      {{curpage}}/{{pages}}
    </div>
    <canvas v-for="page in pages" :id="'the-canvas'+page" :key="page"></canvas>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
import PDFJS from "pdfjs-dist";
const Base64 = require("js-base64").Base64;

export default {
  name: "pdf-component",
  data() {
    return {
      pdfid: null,
      pdfDoc: null,
      pages: 0,
      curpage: 0,
      onePageH: 1,
      allPagesH: 1
    };
  },
  methods: {
    // 加载pdf
    _renderPage(num) {
      this.pdfDoc.getPage(num).then(page => {
        let canvas = document.getElementById("the-canvas" + num);
        let ctx = canvas.getContext("2d");
        let dpr = window.devicePixelRatio || 1;
        let bsr =
          ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio ||
          1;
        let ratio = dpr / bsr;
        let viewport = page.getViewport(
          screen.availWidth / page.getViewport(1).width
        );
        canvas.width = viewport.width * ratio;
        canvas.height = viewport.height * ratio;
        canvas.style.width = viewport.width + "px";
        canvas.style.height = viewport.height + "px";
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        let renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        page.render(renderContext);
        if (this.pages > num) {
          this._renderPage(num + 1);
        } else {
          this.curpage = 1;
          let scrollObj = document.getElementById("pdf_scroll"); // 滚动区域
          this.allPagesH = scrollObj.scrollHeight;
          this.onePageH = this.allPagesH / this.pages + 1; //一页的高度

          window.addEventListener("scroll", this.handleScroll);
          Indicator.close();
        }
      });
    },
    // 加载文件
    _loadFile(url) {
      Indicator.open("加载中...");
      PDFJS.getDocument(url).then(pdf => {
        this.pdfDoc = pdf;
        this.pages = this.pdfDoc.numPages;
        this.$nextTick(() => {
          this._renderPage(1);
        });
      });
    },
    // 返回
    onClickBack() {
      this.$router.go(-1);
    },
    handleScroll(e) {
      // 计算当前以滚动的距离
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      var num = ~~(scrollTop / this.onePageH) + 1;
      if (scrollTop > this.allPagesH - 30 - window.innerHeight)
        num = this.pages;
      this.curpage != num && (this.curpage = num);
    }
  },
  mounted() {
    document.title = this.$route.query.title;
    this.pdfid = this.$route.query.id;
    let url = Base64.decode(this.$route.query.url);
    this._loadFile(url);
  },
  destroyed() {
    this.$api.api(
      this.$infs.file.putCurseProgress,
      { progress: ~~((this.curpage / this.pages) * 100) },
      this.pdfid
    );
    window.removeEventListener("scroll", this.handleScroll); //  离开页面清除（移除）滚轮滚动事件
  }
};
</script>

<style scoped>
canvas {
  display: block;
  border-bottom: 1px solid black;
}
.foot {
  position: fixed;
}
</style>