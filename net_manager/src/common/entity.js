
import { queryParams, array2Descendants } from "./common";
import XLSX from 'xlsx';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import moment from "moment";
import Vue from "Vue";
import { LOCATION_USER_KEY, LOCATION_TOKEN_KEY } from "./constants"

export const CentralInterface = new Vue();

export const RequestParams = class RequestParams {

  constructor(obj = {}) {

    $.extend(this, obj);
  }

  getJsonParams() {
    return this;
  }

  addAttributes(objs) {
    for (let key in objs) {
      this.addAttribute(key, objs[key]);
    }
    return this;
  }

  addAttribute(name, value) {
    if (!!value || typeof value == "number") {
      this[String(name).trim()] = String(value).trim();
    }
    else delete this[String(name).trim()];
    return this;
  }

}

export const ResponseBody = class ResponseBody {

  constructor(obj = {}, code = 1) {
    if (typeof (obj) == 'string') {
      this.message = obj;
      this.code = code;
    }
    else $.extend(this, obj);
  }
}

/**用户数据管理 */
export const User = new class User {

  constructor() {
    this.__info = $.extend({
      
    }, JSON.parse(localStorage.getItem(LOCATION_USER_KEY) || "{}"));
    this.__token = $.extend({
      /**有效期目标时间 */
      expires_in:null,
      /**token 字符串 */
      access_token:null,
    }, JSON.parse(localStorage.getItem(LOCATION_TOKEN_KEY) || "{}"));
  }

  set info (v){
    localStorage.setItem(LOCATION_USER_KEY, JSON.stringify(this.__info = v))
  }

  set token (v){
    localStorage.setItem(LOCATION_TOKEN_KEY, JSON.stringify(this.__token = v))
  }

  get token (){
    return this.__token;
  }

  /**Token 是否有效[0有效,1过期,2失效] */
  get IS_TOKEN_EFFECTIVE(){
    if(this.__token.access_token){
      if(this.__token.expires_in){
        if(new Date().getTime() > this.__token.expires_in){
          return 0;
        }
        else {
          return 1;
        }
      }
    }
    return 2;
  }

  get info (){
    return this._info;
  }

};

/**
 * 导出 Excel 表格数据到文件
 */
export const ExcelSheets = class ExcelSheets {

  static get dictionary() {
    return {
    };
  }

  constructor() {
    this.sheets = {};
  }
  /**
   * 添加工作蒲
   * @param {*} name 工作铺名称
   */
  addSheet(name) {
    if (!this.sheets[name]) {
      this.sheets[name] = {
        rows: [],
        headers: []
      };
    }
    return this;
  }

  setSheetHeader(name, headers) {
    this.addSheet(name);
    this.sheets[name].headers = headers;
    return this;
  }

  /**
   * 添加表格一行数据
   * @param {*} sheetName 添加到哪个工作簿下
   * @param {*} row 数据对象，以[KEY]作为标题
   */
  addRow(sheetName, row) {
    this.sheets[sheetName].rows.push(row);
    return this;
  }
  /**
   * 批量添加数据行
   * @param {*} sheetName 工作部名称
   * @param {*} rows 数据列表
   */
  addRows(sheetName, rows) {
    if (!Array.isArray(rows)) return new Error("addRows(sheetName, rows[必须是数组])");
    for (let row of rows) {
      this.addRow(sheetName, row);
    }
    return this;
  }

  /**
   * 导出数据到文件
   * 导出数据会自动以对象的[Key]为标题
   * 导出直接下载
   * @param {*} filename 文件名称不带后缀
   */
  exportExcel(filename) {
    const wb = XLSX.utils.book_new();
    for (let sheetName in this.sheets) {
      let header = null;
      if (this.sheets[sheetName]) if (this.sheets[sheetName].headers.length) {
        header = this.sheets[sheetName].headers
      }
      const ws = XLSX.utils.json_to_sheet(this.sheets[sheetName].rows, header);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
    }
    XLSX.writeFile(wb, filename + ".xlsx");
  }

  /**
   * 解析 Excel 表格文件
   * @param {*} file 文件
   */
  importExcel(file) {
    return new Promise(resolve => {
      let reader = new FileReader();
      reader.onload = (e => {
        let binary = "";
        let bytes = new Uint8Array(e.target.result);
        let length = bytes.byteLength;
        for (let i = 0; i < length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        /* read workbook */
        var wb = XLSX.read(binary, { type: 'binary' });
        let data = {};
        for (let name of wb.SheetNames) {
          let header = 2;
          if (this.sheets[name]) if (this.sheets[name].headers.length) {
            header = this.sheets[name].headers
          }
          data[name] = XLSX.utils.sheet_to_json(wb.Sheets[name], { header: header }).slice(2);
        }
        resolve(data);
      }).bind(this);
      reader.readAsArrayBuffer(file);
    });
  }


  empty() {
    this.sheets = {};
    return this;
  }

}
/**
 * 网络对象
 * 目前可以获取本地的网络IP地址
 * ips[0]
 */
export const NetworkAddress = [];

var RTCPeerConnection = window.RTCPeerConnection
  || window.mozRTCPeerConnection
  || window.webkitRTCPeerConnection;
var mediaConstraints = {
  optional: [{ RtpDataChannels: true }]
};
var servers = undefined;
//add same stun server for chrome  
if (window.webkitRTCPeerConnection) servers = { iceServers: [{ urls: "stun:stun.services.mozilla.com" }] };
//construct a new RTCPeerConnection  
var pc = new RTCPeerConnection(servers, mediaConstraints);
//listen for candidate events  
pc.onicecandidate = function (ice) {
  //skip non-candidate events  
  if (ice.candidate) {
    //match just the IP address  
    var ip_addr = (/([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(ice.candidate.candidate)||[])[1];
    //remove duplicates  
    if (ip_addr) NetworkAddress.push(ip_addr)
  }
};
//create a bogus data channel  
pc.createDataChannel("");
//create an offer sdp  
pc.createOffer(function (result) {
  //trigger the stun server request  
  pc.setLocalDescription(result, function () { });
}, function () { });

console.log(NetworkAddress)