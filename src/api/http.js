/* 
	该文件是对axios这个库的二次封装，完成：
		1.配置请求的基础路径
		2.配置超时时间
		3.统一处理post请求json编码问题（转为urlencoded）
		4.统一返回真正的数据data，而不是response对象
		5.统一处理错误
*/

import axios from 'axios' //引入axios
import qs from 'querystring'
import {
    message as notice
} from 'antd';

// 配置请求的基本路径
axios.defaults.baseURL = 'http://localhost:3000'

// 超时时长控制

axios.defaults.timeout = 2000

axios.interceptors.request.use((config) => {
    //函数体
    let {
        method,
        data
    } = config

    if (method.toLowerCase() === 'post' && data instanceof Object) {
        config.data = qs.stringify(data)
    }
    return config
})

axios.interceptors.response.use(
    res => {
        if (res.data.status === 1) {
            notice.error(res.data.msg, 1)
            return new Promise(() => {})
        }
        return res.data
    },
    err => {
        let {
            message
        } = err
        let errMessage = '未知错误请联系管理员'
        if (message.indexOf('401') !== -1) errMessage = '请重新登录'
        if (message.indexOf('Network Error') !== -1) errMessage = '网络错误'
        if (message.indexOf('timeOut') !== -1) errMessage = '请求超时'
        notice.error(errMessage, 1) //第二个参数为自动关闭时间  单位为s
        return new Promise(() => {})
    }
)

export default axios