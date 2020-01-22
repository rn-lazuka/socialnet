import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>);

    let addPost = (values) => {
        props.addPost(values.newMessageText);
    };


    return (
        <div className={s.postBlock}>
            <h3> My posts </h3>
            <AddProfilePostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
};

let ProfilePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageText" component={"textarea"} placeholder={"Enter your text"}> </Field>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};
const AddProfilePostFormRedux = reduxForm({form: "ProfileAddPostForm"})(ProfilePostForm);


export default MyPosts;