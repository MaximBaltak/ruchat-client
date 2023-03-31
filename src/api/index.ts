import axios, {AxiosRequestHeaders} from 'axios'
import config from './../app-config.config.json'
import {AuthRequest} from "./AuthRequest";
const axiosInstance = axios.create({
    baseURL: config.App_url_server
})

axiosInstance.interceptors.request.use((request) => {
    const token: string | null = localStorage.getItem('access_token')
    request.headers = {
        ...request.headers,
        'Authorization': token ? `Bearer ${token}`: ''
    } as AxiosRequestHeaders
    return request
})
export const api = {
    auth: AuthRequest
}
export default axiosInstance
