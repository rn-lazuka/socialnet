import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxlength, required} from "../../../utils/validators/validators";


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

let maxLength200 = maxlength(200);

let ProfilePostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newMessageText"
                       component={Textarea} placeholder={"Enter your text"}
                       validate={[required, maxLength200]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};
const AddProfilePostFormRedux = reduxForm({form: "ProfileAddPostForm"})(ProfilePostForm);


export default MyPosts;