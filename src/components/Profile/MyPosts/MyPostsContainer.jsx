import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state)=>{
    return {
        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts,
    }
};
let mapDispatchToProps = (dispatch)=>{

    return {
        updateNewPostText:(text)=>{
            dispatch(onPostChangeActionCreator(text))
        },
        addPost:()=>{
            dispatch(addPostActionCreator());
        },
    }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;