import {DialogMessageType, DialogType} from "../types/types";

const ADD_DIALOG_POST = 'ADD-DIALOG-POST';


let initialState= { dialogs: [
        {name: 'Sasha', id: 1},
        {name: 'Pasha', id: 2},
        {name: 'Dasha', id: 3},
        {name: 'Masha', id: 4},
        {name: 'Glasha', id: 5},
        {name: 'Dimych', id: 6}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your way to samurai?'},
        {id: 3, message: 'great work'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'YOOOO'},
        {id: 6, message: 'WAZZZZUUUP'}
    ] as Array<DialogMessageType>
};

type initialStateType = typeof initialState;

const dialogsReducer = (state= initialState, action:DialogsActionType):initialStateType => {
    switch (action.type) {
        case ADD_DIALOG_POST: {
            let newPost = {
                id: 7,
                message: action.message,
            };
          return  {...state,messages:[...state.messages,newPost]}
        }
        default: return state
    }
};
type DialogsActionType =AddDialogPostActionCreatorActionType
type AddDialogPostActionCreatorActionType={
    type:typeof ADD_DIALOG_POST
    message:string
}
export const addDialogPost = (message:string):AddDialogPostActionCreatorActionType => ({type: ADD_DIALOG_POST,message});

export default dialogsReducer;