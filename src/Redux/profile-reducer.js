const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Вжух вжух вжух, мечи воздух рассекают', likeCount: 999},
        {id: 2, message: 'Great, we can go next step!', likeCount: 17},
        {id: 3, message: 'Кто не работает, тот ест.', likeCount: 0},
        {id: 4, message: 'Жить хорошо, а хорошо жить ещё лучше!', likeCount: 666}
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};
export const addPostActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;