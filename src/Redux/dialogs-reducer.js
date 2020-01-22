const ADD_DIALOG_POST = 'ADD-DIALOG-POST';

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

}
const dialogsReducer = (state= initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_POST: {
            let newPost = {
                id: 7,
                message: action.message,
            };
          return  {...state,messages:[...state.messages,newPost],newMessageText:''}
        }
        default: return state
    }
};
export const addDialogPostActionCreator = (message) => ({type: ADD_DIALOG_POST,message});

export default dialogsReducer;