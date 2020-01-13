const ADD_DIALOG_POST = 'ADD-DIALOG-POST';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState= { dialogs: [
        {name: 'Sasha', id: 1},
        {name: 'Pasha', id: 2},
        {name: 'Dasha', id: 3},
        {name: 'Masha', id: 4},
        {name: 'Glasha', id: 5},
        {name: 'Dimych', id: 6}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your way to samurai?'},
        {id: 3, message: 'great work'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'YOOOO'},
        {id: 6, message: 'WAZZZZUUUP'}
    ],
    newMessageText: ""

}
const dialogsReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_POST: {
            let newPost = {
                id: 7,
                message: state.newMessageText,
            };
          return  {...state,messages:[...state.messages,newPost],newMessageText:''}
        }
        case UPDATE_NEW_MESSAGE: {
           return {...state,newMessageText:action.newText};
        }
        default: return state
    }
};
export const addDialogPostActionCreator = () => ({type: ADD_DIALOG_POST});
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text});

export default dialogsReducer;