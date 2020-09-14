import {DialogMessageType, DialogType} from "../types/types";
import {InferActionsTypes} from './redux-store'

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
type ActionsType = InferActionsTypes<typeof actions>

const dialogsReducer = (state= initialState, action:ActionsType):initialStateType => {
    switch (action.type) {
        case 'ADD_DIALOG_POST': {
            let newPost = {
                id: 7,
                message: action.message,
            };
          return  {...state,messages:[...state.messages,newPost]}
        }
        default: return state
    }
};
export const actions = {
  addDialogPost : (message:string) => ({type: 'ADD_DIALOG_POST',message}as const)
}

export default dialogsReducer;