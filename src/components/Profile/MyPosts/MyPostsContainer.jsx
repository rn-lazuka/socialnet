import React from 'react';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";


const MyPostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let updateNewPostText = (text) => {
                        store.dispatch(onPostChangeActionCreator(text))
                    };

                    return (
                        <MyPosts updateNewPostText={updateNewPostText}
                                 addPost={addPost}
                                 newPostText={state.profilePage.newPostText}
                                 posts={state.profilePage.posts}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
};


export default MyPostsContainer;