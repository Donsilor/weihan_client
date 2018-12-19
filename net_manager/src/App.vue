<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style >

/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */
html{line-height:1.15;-webkit-text-size-adjust:100%;}
body{margin:0;}
main{display:block;}
h1{margin:.67em 0;font-size:2em;}
hr{overflow:visible;box-sizing:content-box;height:0;}
pre{font-size:1em;font-family:monospace;}
a{background-color:transparent;}
abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}
b,strong{font-weight:bolder;}
code,kbd,samp{font-size:1em;font-family:monospace;}
small{font-size:80%;}
sub,sup{position:relative;vertical-align:baseline;font-size:75%;line-height:0;}
sub{bottom:-.25em;}
sup{top:-.5em;}
img{border-style:none;}
button,input,optgroup,select,textarea{margin:0;font-size:100%;font-family:inherit;line-height:1.15;}
button,input{overflow:visible;}
button,select{text-transform:none;}
[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;}
[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none;}
[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText;}
fieldset{padding:.35em .75em .625em;}
legend{display:table;box-sizing:border-box;padding:0;max-width:100%;color:inherit;white-space:normal;}
progress{vertical-align:baseline;}
textarea{overflow:auto;}
[type=checkbox],[type=radio]{box-sizing:border-box;padding:0;}
[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto;}[type=search]{outline-offset:-2px;-webkit-appearance:textfield;}
[type=search]::-webkit-search-decoration{-webkit-appearance:none;}
::-webkit-file-upload-button{font:inherit;-webkit-appearance:button;}
details{display:block;}
summary{display:list-item;}
[hidden],template{display:none;}

/* 深圳市静江网络科技有限公司 */
/* 自定义初始化样式结束 */
*,*:before,*:after {-webkit-box-sizing:border-box; box-sizing:border-box;margin:0; padding:0;}
/*:root {font-size: calc(.8vw + .1vh);}*/
html{font-family: "PingFang SC UltraLight",PingFangSC-Light,"Microsoft YaHei",Tahoma,"Hiragino Sans GB","WenQuanYi Micro Hei",sans-serif;font-size: 16px;}
body{font-size: 1rem;}
label{cursor: pointer;}
input{outline: none;}
[type=button],button,select{cursor: pointer;outline: none;}
input::-webkit-input-placeholder{color:#b2b2b2;}
input::-moz-placeholder{color:#b2b2b2;}
input:-moz-placeholder{color:#b2b2b2;}
input:-ms-input-placeholder{color:#b2b2b2;}

/*

input[type="checkbox"]{-webkit-appearance: none;-moz-appearance: none;appearance: none;width: .875rem;height: .875rem;border: 2px solid #fff;border-radius: 3px;margin: 2px 0;vertical-align: text-bottom;cursor: pointer;}
input[type="checkbox"]:checked{background: url("../images/checkImg.jpg") no-repeat center/.375rem;}
*/
textarea{outline: none;resize: none;}
li{list-style-type:none;}
a{text-decoration:none;color: #666;}

.clf:before, .clf:after, .wrap:before, .wrap:after {content: " ";display: table;}
.clf:after, .wrap:after { clear: both;}
.clf, .wrap {*zoom: 1}

.fl{float: left;}
.fr{float: right;}

/* 自定义初始化样式结束 */

</style>

