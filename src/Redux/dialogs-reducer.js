const ADD_DIALOG_POST = 'ADD-DIALOG-POST';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    if (action.type === ADD_DIALOG_POST) {
        let newPost = {
            id: 7,
            message: state.newMessageText,
        };
       state.messages.push(newPost);
        state.newMessageText = '';
    } else if (action.type === UPDATE_NEW_MESSAGE) {
        state.newMessageText = action.newText;

    }

    return state;
};
export const addDialogPostActionCreator = () => ({type: ADD_DIALOG_POST});
export const onMessageChangeActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE, newText: text});

export default dialogsReducer;