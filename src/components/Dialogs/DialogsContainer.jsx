import {addDialogPostActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";


let mapStateToProps =(state)=>{
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
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
let AutRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect (mapStateToProps,mapDispatchToProps)(AutRedirectComponent);

export default DialogsContainer;