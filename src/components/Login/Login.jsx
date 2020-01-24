import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxlength, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css'

let maxLength = maxlength(20);
const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={Input} placeholder={'Email'}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} placeholder={'Password'} type={'password'}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'}/> remember me
            </div>
            { props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {
    const onSubmit = (formData) => {
       props.login(formData.email,formData.password,formData.rememberMe)
    };

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};
let mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth
});

export default connect (mapStateToProps, {login}) (Login)