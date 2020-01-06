let store = {
    _state :{
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
    getState(){
        return this._state
    },
    _callSubscriber () {
        console.log("State changed")
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    addDialogPost () {
        let newPost = {
            id: 7,
            message: this._state.dialogsPage.newMessageText,
        };
        this._state.dialogsPage.messages.push(newPost);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessage (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
};

export default store