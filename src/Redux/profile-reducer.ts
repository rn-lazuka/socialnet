import {ProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {ProfileMessagesType, PhotosType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: 'Вжух вжух вжух, мечи воздух рассекают', likeCount: 999},
        {id: 2, message: 'Great, we can go next step!', likeCount: 17},
        {id: 3, message: 'Кто не работает, тот ест.', likeCount: 0},
        {id: 4, message: 'Жить хорошо, а хорошо жить ещё лучше!', likeCount: 666}
    ]as Array<ProfileMessagesType>,
    profile: null as ProfileType | null,
    status: ""
};
type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action:ProfileActionType):InitialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            };
            return {...state, posts: [...state.posts, newPost],}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
        }
        default:
            return state;
    }
};

type ProfileActionType = AddPostActionCreatorActionType|DeletePostActionType|SetUserProfileType|SetUserStatusType|SavePhotoSuccessType
type AddPostActionCreatorActionType = {
    type: typeof  ADD_POST
    newPostText:string
}
export const addPostActionCreator = (newPostText:string):AddPostActionCreatorActionType => ({type: ADD_POST, newPostText});
type DeletePostActionType = {
    type: typeof  DELETE_POST
    postId:number
}
export const deletePost = (postId:number):DeletePostActionType => ({type: DELETE_POST, postId});
type SetUserProfileType = {
    type: typeof  SET_USER_PROFILE
    profile:ProfileType
}
export const setUserProfile = (profile:ProfileType):SetUserProfileType => ({type: SET_USER_PROFILE, profile});
type SetUserStatusType = {
    type: typeof  SET_USER_STATUS
    status:string
}
export const setUserStatus = (status:string):SetUserStatusType => ({type: SET_USER_STATUS, status});
type SavePhotoSuccessType = {
    type: typeof  SAVE_PHOTO_SUCCESS
    photos:PhotosType
}
export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessType => ({type: SAVE_PHOTO_SUCCESS, photos});

type DispatchType = Dispatch<ProfileActionType>
type GetStateType = ()=>AppStateType
type ThunkType<P> = ThunkAction<P,AppStateType,unknown,ProfileActionType>

export const getUserProfile = (id:number|null):ThunkType<Promise<void>> => async (dispatch) => {
    const response = await ProfileAPI.getProfile(id);
    dispatch(setUserProfile(response.data));
};
export const getUserStatus = (id:number):ThunkType<Promise<void>>  => async (dispatch) => {
    let response = await ProfileAPI.getStatus(id);
    dispatch(setUserStatus(response.data));
};
export const updateUserStatus = (status:string):ThunkType<Promise<void>>  => async (dispatch) => {
    try {
        const response = await ProfileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    } catch (error) {
        alert(error.message)
    }
};
export const savePhoto = (file:any):ThunkType<Promise<void>>  => async (dispatch) => {
    const response = await ProfileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
};
//need to fix saveProfile type
export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:GetStateType) => {
    const userId = getState().auth.userId;
    const response = await ProfileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;