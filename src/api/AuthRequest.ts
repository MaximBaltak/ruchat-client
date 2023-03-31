import axiosInstance from "./index";
import {LoginUser} from "../types/loginUser";

export class AuthRequest {
    static async registration(data: FormData) {
        return axiosInstance.post('auth/create',data)
    }
    static async login(data: LoginUser) {
        return axiosInstance.post('auth/login',data)
    }
}
