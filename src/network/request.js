import axios from 'axios'

//最终方法
//返回的就是一个Promise
//方便以后换框架
export function request(config) {
    //1.创建axios 的实例
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:8000/api/n3',
            timeout: 5000
        }
    )
    //2拦截器设置
    //使用情况
    //1.config 信息不符合服务武器要求
    //2.发送网络请求 显示动画
    //3.登录的验证 跳转
    instance.interceptors.request.use(
        config =>{
            console.log(config);
            return config
        },err =>{
            console.log(err);
        }
    )
    //2.2回应拦截
    instance.interceptors.response.use(
        config =>{
            console.log(config);
            return config
        },err =>{
            console.log(err);
        }
    )

    //3.发送真正的网络请求
    return instance(config)

}



//使用Promise
//config 是网络配置 选项
// export function request(config) {
//     return new Promise((resolve,reject) =>{
//         const instance = axios.create({
//             baseURL:'http://152.136.185.210:8000/api/n3',
//             timeout:5000
//         })
//
//         //发送真正的网络请求
//         instance(config)
//             .then(res =>{ //成功之后
//                 resolve(res)
//             })
//             .catch(err =>{
//                 reject(err) //失败之后
//             })
//     })
// }

//使用方法
// request({
//     url:'/home/multidata'
// }).then(res =>{
//     console.log(res);
// }).catch(err =>{
//     console.log(err);
// })


//不推荐使用
// export function request(config,success,failure) {
//     //1.创建axios的实例
//
//     const instance = axios.create({
//         baseURL:'http://152.136.185.210:8000/api/n3',
//         timeout:5000
//     })
//
//     //发送真正的网络请求
//     instance(config).then(res =>{
//         console.log(res);
//         success(res)
//     }).catch(err =>{
//         console.log(err);
//         failure(err)
//     })
// }