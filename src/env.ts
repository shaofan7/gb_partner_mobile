// .env.ts 文件
// 不同环境访问不同的路径
// import store from '@/common/store/index'

//登录接口
const ENV_LOGIN_URL = {
  development: 'http://api.e-7.club', //开发环境
  production: 'http://www.api.nccnt.com/', //生产环境
};

//项目接口
const ENV_API_URL = {
  development: 'http://api.e-7.club', //开发环境
  production: 'http://www.tianqiapi.com/', //生产环境
};

//图片上传
const IMG_UPLOAD_URL = 'http://api.e-7.club';

//高德地图
const GAODE_URL = 'https://restapi.amap.com/';

// process.env.NODE_ENV
export const LOGIN_URL = ENV_LOGIN_URL['development']; //后台根域名
export const API_URL = ENV_API_URL['development']; //后台接口域名
export const MAP_URL = GAODE_URL; //地图接口
export const IMG_URL = IMG_UPLOAD_URL; //图片上传接口
