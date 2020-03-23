import axios from "axios";
import {ContactsType, PhotosType, ProfileType, UserType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "6d54c1cb-0079-4662-b13d-27d4ae8cf67d"}
});
type OnFollowClickResponseType = {
    resultCode: ResultCodeEnum
    messages:Array<string>
    data: {}
}
type OnUnfollowClickResponseType = {
    resultCode: ResultCodeEnum
    messages:Array<string>
    data: {}
}
export const UsersAPI = {
    getUsers(currentPage:number, pageSize:number) {
        return instance.get<UserType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    onFollowClick(id:number) {
        return instance.post<OnFollowClickResponseType>(`follow/${id}`)
    },
    onUnFollowClick(id:number) {
        return instance.delete<OnUnfollowClickResponseType>(`follow/${id}`)
    }
};
export enum ResultCodeEnum {
    Success=0,
    Error=1,
}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired=10
}
type AuthMeResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {
        id: number
        email: string
        login: string
    }
}
type LoginResponseType = {
    resultCode: ResultCodeEnum|ResultCodeForCaptcha
    messages: Array<string>
    data: {
        userId: number
    }
}
type LogoutResponseType = {
    resultCode: ResultCodeEnum
    messages:Array<string>
    data: {}
}
export const AuthAPI = {
    authMe() {
        return instance.get<AuthMeResponseType>(`auth/me`).then(res=>res.data)
    },
    login(email:string, password:string, rememberMe = false,captcha:string|null=null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe,captcha}).then(res=>res.data)
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/login`)
    }
};

type GetProfileResponseType={
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
type UpdateStatusResponseType = {
    resultCode: ResultCodeEnum
    messages:Array<string>
    data: {}
}
type SaveProfileResponseType = {
    resultCode: ResultCodeEnum
    messages:Array<string>
    data: {}
}
type SavePhotoResponseType = {
    resultCode: ResultCodeEnum|ResultCodeForCaptcha
    messages: Array<string>
    data: {
        photos: PhotosType
    }
}
export const ProfileAPI = {
    getProfile(userId:number) {
        return instance.get<GetProfileResponseType>(`profile/${userId}`)
    },
    getStatus(userId:number) {
        return instance.get<string>(`profile/status/` + userId)
    },
    updateStatus(status:string) {
        return instance.put<UpdateStatusResponseType>(`profile/status/`, {status: status})
    },
    savePhoto(photoFile:any){
        const formData =  new FormData();
        formData.append("image", photoFile);
        return instance.put<SavePhotoResponseType>(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

    },
    saveProfile(profile:ProfileType){
        return instance.put<SaveProfileResponseType>(`profile`, profile)
    }
};
export const SecurityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
};
