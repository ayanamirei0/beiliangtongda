import axios from 'axios'
import Qs from 'qs'
var root = process.env.API_HOST
import router from '../router'
import { Message } from 'element-ui'

//请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 请求出错做什么
    return Promise.reject(error)
})
    // 响应拦截器
axios.interceptors.response.use(function(response) {
    if (response.data.returnCode === 2001 || response.data.returnCode === 1111) {
        if (response.data.message != null && response.data.message.length > 0) {
            Message.error(response.data.message);
        }
        sessionStorage.clear()
        localStorage.clear()
        router.replace("/login/pwdLogin")
    }
    return response
}, function(error) {
    console.log(error)
    return Promise.reject(error)
})

// axios请求封装
export default function http(url = '', data = {}, type = 'POST') {
    return new Promise((resolve, reject) => {
        console.log('http requestUrl: ' + url)
        console.log('http requestData: ' + JSON.stringify(data))
        let Promise
        if (type === 'GET') {
            Promise = axios({
                method: 'get',
                url: url,
                baseUrl: root,
                data: Qs.stringify(data),
                // 是否携带cookie信息
                withCredentials: true,
            })
        } else {
            let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
            let headerParam = {"tokenId": userInfo ? userInfo.token : '',
                "phone": userInfo ? userInfo.phone : ''};

            Promise = axios({
                method: 'post',
                url: url,
                baseUrl: root,
                headers: headerParam,
                data: data,
                // 是否携带cookie信息
                withCredentials: false,
            })
        }
        Promise.then(response => {
                if (response) {
                    resolve(response.data)
                }
            })
            .catch(error => {
                reject(error)
            })
    })
}
