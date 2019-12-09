import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
            <textarea> </textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
            <Post message="Hello all, i use props." likeCount="0"/>
            <Post message="Great, we can go next step!" likeCount="7"/>
            <Post message="Вжух вжух вжух, мечи воздух рассекают" likeCount="666"/>
            </div>
        </div>);
}

export default MyPosts;