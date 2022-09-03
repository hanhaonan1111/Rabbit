import axios from "axios";

export let baseURL = 'https://apipc-xiaotuxian-front.itheima.net'
let http = axios.create({
    baseURL: baseURL,
    timeout: 5000
})


http.interceptors.request.use(config => {
    return config
})
http.interceptors.response.use(response => {
    return response.data
}, error => {

})
export default http