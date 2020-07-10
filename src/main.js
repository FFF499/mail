import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import './assets/img/tabbar/font_1928841_rttihelo47/iconfont.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

require('./assets/css/base.css')

import {request}  from './network/request'
request({
    url:'/home/multidata'
}).then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);
})




// // axios的全局配置
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/n3'
// // axios.defaults.timeout = 5000
//
//
// axios({
//   url:'/home/multidata',
//   method:'get'
// }).then(res =>{
//   console.log(res);
// })
//
// axios({
//   url:'/home/data',
//   params:{
//     type:'sell',
//     page:1
//   },
//   method:'get'
// }).then(res =>{
//   console.log(res);
// })
//
// //axios 发送并发请求
// axios.all(
//     [
//       axios({
//         url:'/home/multidata',
//
//       }),
//       axios({
//         url:'/home/data',
//         params:{
//           type:'sell',
//           page:1
//         },
//       })
//     ]).then(axios.spread((res1,res2) =>{
//         console.log(res1);
//         console.log(res2);
// }))
//
