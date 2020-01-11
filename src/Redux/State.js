const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_DIALOG_POST = 'ADD-DIALOG-POST';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Вжух вжух вжух, мечи воздух рассекают', likeCount: 999},
                {id: 2, message: 'Great, we can go next step!', likeCount: 17},
                {id: 3, message: 'Кто не работает, тот ест.', likeCount: 0},
                {id: 4, message: 'Жить хорошо, а хорошо жить ещё лучше!', likeCount: 666}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_DIALOG_POST) {
            let newPost = {
                id: 7,
                message: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messages.push(newPost);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
};
export const addPostActionCreator = () => {
    return {type: ADD_POST}
};
export const onPostChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
};
export const addDialogPostActionCreator = () => {
    return {type: ADD_DIALOG_POST}
};
export const onMessageChangeActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE, newText: text}
};

export default store