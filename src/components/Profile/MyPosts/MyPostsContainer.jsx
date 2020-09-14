import {actions} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state)=>{
    return {
        newPostText:state.profilePage.newPostText,
        posts:state.profilePage.posts,
        isAuth:state.auth.isAuth
    }
};
let mapDispatchToProps = (dispatch)=>{
    return {
        addPost:(newPostText)=>{
            dispatch(actions.addPostActionCreator(newPostText));
        },
    }
};

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;