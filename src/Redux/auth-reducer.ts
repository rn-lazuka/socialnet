import {AuthAPI, ResultCodeEnum, ResultCodeForCaptcha, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form"
import {Dispatch} from "redux";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null // if null , then captcha is not required
};


let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null // if null , then captcha is not required
};

const authReducer = (state = initialState, action: AuthActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
type AuthActionType = GetCaptchaUrlSuccessActionType|SetAuthUserDataActionType
type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS
    payload: { captchaUrl: string }
}
type PayloadType = {
    userId: number|null,
    email: string|null,
    login: string|null,
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: PayloadType
}

const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
});
const setAuthUserData = (userId: number|null, email: string|null, login: string|null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

type DispatchType = Dispatch<AuthActionType>
type GetStateType = ()=>AppStateType
type ThunkType<P> = ThunkAction<P,AppStateType,unknown,AuthActionType>

export const getAuthUserData = ():ThunkType<Promise<void>> => async (dispatch) => {
    let meData = await AuthAPI.authMe();
    if (meData.resultCode === ResultCodeEnum.Success) {
        let {id, email, login} = meData.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};
// need to fix login dispatch type
export const login = (email:string, password:string, rememberMe:boolean, captcha:string):ThunkType<Promise<void>>  => async (dispatch:any) => {
    let loginData = await AuthAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodeEnum.Success) {
        //success, get auth data
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}))
    }
};
export const logout = ():ThunkType<Promise<void>> => async (dispatch) => {
    let response = await AuthAPI.logout();
    if (response.data.resultCode === ResultCodeEnum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};
export const getCaptchaUrl = ():ThunkType<Promise<void>> => async (dispatch) => {
    const response = await SecurityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))

};

export default authReducer;