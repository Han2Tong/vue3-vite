import axios from "axios";
import {ElMessage} from 'element-plus'

//创建axios实例
const instance = axios.create({
    //接口
    baseURL: "/api",
    //超时时间
    timeout: 50000
})

//请求拦截器
instance.interceptors.request.use(
    (config) => {
        let token = sessionStorage.getItem('token')
        if (token) {
            config.headers['token'] = token
        }
        return config;
    },
    error => {
        ElMessage.error(error)
    }
)

//响应拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error && error.response ){
            let status = error.response.status
            switch (status) {
                case 400:
                    ElMessage.error("...")
                    break;
                default:
                    break;
            }
        }else {
            if (JSON.stringify(error).includes('timeout')){
                ElMessage.error("服务器响应超时，请刷新页面")
            }
            ElMessage.error("连接服务器失败")
        }
        return Promise.reject(error)
    }
)
export  default  instance;
