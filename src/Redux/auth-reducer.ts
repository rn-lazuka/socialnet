import {ResultCodeEnum, ResultCodeForCaptchaEnum} from '../api/api'
import {FormAction, stopSubmit} from 'redux-form'
import {BaseThunkType, InferActionsTypes} from './redux-store'
import {AuthAPI} from '../api/auth-api'
import {SecurityAPI} from '../api/security-api'

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null// if null , then captcha is not required
}
type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>

const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
    case 'GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    payload: {userId, email, login, isAuth}
  } as const),
  getCaptchaUrlSuccess: (captchaUrl: string) => ({
    type: 'GET_CAPTCHA_URL_SUCCESS',
    payload: {captchaUrl}
  } as const)
}

type ThunkType = BaseThunkType<ActionsType | FormAction>

export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let meData = await AuthAPI.authMe()
  if (meData.resultCode === ResultCodeEnum.Success) {
    let {id, email, login} = meData.data
    dispatch(actions.setAuthUserData(id, email, login, true))
  }
}
// need to fix login dispatch type
export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  let loginData = await AuthAPI.login(email, password, rememberMe, captcha)
  if (loginData.resultCode === ResultCodeEnum.Success) {
    //success, get auth data
    await dispatch(getAuthUserData())
  } else {
    if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
      await dispatch(getCaptchaUrl())
    }
    let message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
    dispatch(stopSubmit('login', {_error: message}))
  }
}
export const logout = (): ThunkType => async (dispatch) => {
  let response = await AuthAPI.logout()
  if (response.data.resultCode === ResultCodeEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false))
  }
}
export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await SecurityAPI.getCaptchaUrl()
  const captchaUrl = response.url
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl))

}

export default authReducer