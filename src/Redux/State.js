let renderEntireTree = () => {
    console.log("State changed")
};
const state = {
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
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export const addDialogPost = () => {
    let newPost = {
        id: 7,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newPost);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
};

export const updateNewMessage = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
};

export default state