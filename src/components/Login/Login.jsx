import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxlength, required} from "../../utils/validators/validators";

let maxLength = maxlength(20);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} component={Input} placeholder={'Login'}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} placeholder={'Password'}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login