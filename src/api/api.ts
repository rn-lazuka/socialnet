import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "6d54c1cb-0079-4662-b13d-27d4ae8cf67d"}
});

export enum ResultCodeEnum {
    Success=0,
    Error=1,
}
export enum ResultCodeForCaptchaEnum {
    CaptchaIsRequired=10
}

export type ApiResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}