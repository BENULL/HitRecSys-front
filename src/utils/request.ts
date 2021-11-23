// import store from "@/store";
// import router from "@/router";
import { config } from "@/config";

import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { ElMessage, ElLoading } from "element-plus"
import { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type' //导入ElLoading钩子

let loading: ILoadingInstance

const service = axios.create({
    baseURL: config.baseApi,
    timeout: 5000,
    withCredentials: true, // send cookies when cross-domain requests
})

service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        // 加载动画
        if (config.loading) {
            loading = ElLoading.service({
                lock: true,
                text: '正在请求数据...',
                background: 'rgb(0,0,0,0.5)'
            })
        }
        // 在此处添加请求头等，如添加 token
        // if (store.state.token) {
        // config.headers['Authorization'] = `Bearer ${store.state.token}`
        // }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
)

service.interceptors.response.use(
    async (response: AxiosResponse) => {
        loading.close()
        if (response.data.status === 0) {
            return response
        } else {
            ElMessage.warning(showStatus(response.data.status))
        }
        return response
    },
    (error: any) => {
        loading.close()
        if (error && error.response) {
            // 请求已发出但不在2xx范围
            ElMessage.warning(showStatus(error.response.status))
            return Promise.reject(error.response.data);
        } else {
            ElMessage.warning("网络连接异常,请稍后再试!")
        }
        // store.auth.clearAuth()
        // store.dispatch("clearAuth")
    }
)

const showStatus = (status: number) => {
    let message = ''
    switch (status) {
        case 400:
            message = '请求错误(400)'
            break
        case 401:
            message = '未授权，请重新登录(401)'
            break
        case 403:
            message = '拒绝访问(403)'
            break
        case 404:
            message = '请求出错(404)'
            break
        case 408:
            message = '请求超时(408)'
            break
        case 500:
            message = '服务器错误(500)'
            break
        case 501:
            message = '服务未实现(501)'
            break
        case 502:
            message = '网络错误(502)'
            break
        case 503:
            message = '服务不可用(503)'
            break
        case 504:
            message = '网络超时(504)'
            break
        case 505:
            message = 'HTTP版本不受支持(505)'
            break
        default:
            message = `连接出错(${status})!`
    }
    return `${message}，请检查网络或联系管理员！`
}

export default service
