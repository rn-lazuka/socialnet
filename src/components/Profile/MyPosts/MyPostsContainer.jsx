import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let updateNewPostText = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text))
    };

    return (
        <MyPosts updateNewPostText={updateNewPostText}
                 addPost={addPost}
                 newPostText={state.profilePage.newPostText}
                 posts={state.profilePage.posts}/>
    )
};


export default MyPostsContainer;