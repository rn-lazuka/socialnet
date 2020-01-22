import {addDialogPostActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps =(state)=>{
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
};
let mapDispatchToProps =(dispatch)=>{
    return{
        addDialogPost:(message)=>{
            dispatch(addDialogPostActionCreator(message));
        }
    }
};


export default compose (
    connect (mapStateToProps,mapDispatchToProps),
    // withAuthRedirect
)(Dialogs)
