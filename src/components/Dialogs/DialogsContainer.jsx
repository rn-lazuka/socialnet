import {addDialogPostActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps =(state)=>{
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth:state.auth.isAuth
    }
};
let mapDispatchToProps =(dispatch)=>{
    return{
        addDialogPost:()=>{
            dispatch(addDialogPostActionCreator());
        },
        onMessageChange:(text)=>{
            dispatch(onMessageChangeActionCreator(text))
        },
    }
};

const DialogsContainer = connect (mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer;