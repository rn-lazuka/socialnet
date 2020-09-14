import {instance, ApiResponseType, ResultCodeEnum, ResultCodeForCaptchaEnum} from './api'

type AuthMeDataType = {
    id: number
    email: string
    login: string
}
type LoginDataType = {
    userId: number
}


export const AuthAPI = {
  authMe() {
    return instance.get<ApiResponseType<AuthMeDataType>>(`auth/me`).then(res => res.data)
  },
  login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
    return instance.post<ApiResponseType<LoginDataType, ResultCodeEnum|ResultCodeForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
  },
  logout() {
    return instance.delete<ApiResponseType>(`auth/login`)
  }
}