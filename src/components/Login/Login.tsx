import React, {FC} from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxlength, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css'
import {AppStateType} from "../../Redux/redux-store";

type LoginFormOwnPropsType = {
    captchaUrl:string|null
}
let maxLength = maxlength(40);
const LoginForm:FC<InjectedFormProps<LoginFormValuesType>&LoginFormOwnPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required, maxLength], Input)}
            {createField('Password', 'password', [required, maxLength], Input, {type: "password"})}
            {createField(undefined, 'rememberMe', [], Input, {type: 'checkbox'}, "remember me")}

            {captchaUrl && <img src={captchaUrl} alt="#"/>}
            {captchaUrl &&  createField("Symbols from image", 'captcha', [required], Input)}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm<LoginFormValuesType,LoginFormOwnPropsType>({form: 'login'})(LoginForm);

type MapStatePropsType={
    isAuth:boolean
    captchaUrl:string|null
}
type MapDispatchPropsType ={
    login:(email:string, password:string, rememberMe:boolean, captcha:string)=>void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

type LoginFormValuesType = {
    email:string
    password:string
    rememberMe:boolean
    captcha:string
}
const Login:FC<PropsType> = (props) => {
    const onSubmit = (formData:LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha)
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
};
let mapStateToProps = (state:AppStateType):MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps, {login})(Login)