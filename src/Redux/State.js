import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


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
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);
            this._callSubscriber(this._state);
    }
};



export default store