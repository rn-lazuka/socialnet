import {Field, reduxForm} from "redux-form";
import React from 'react'
import {maxlength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const maxLength100 = maxlength(100);
const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newMessageBody"}
                   component={Textarea}
                   placeholder={"Enter your text"}
                   validate={[required, maxLength100]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
};

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);