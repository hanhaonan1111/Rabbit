import axios from "axios";

export let baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
let http = axios.create({
    baseURL,
    timeout: 5000
})


http.interceptors.request.use((config) => {
    return config
})
http.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    // 强制等待一个拒绝的契约会抛出错误,此错误会被try捕获
    return Promise.reject(err)
})
export default http