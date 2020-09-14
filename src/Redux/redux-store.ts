import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import ThunkMiddleWare, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer'

let rootReducer = combineReducers(
  {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
  }
)

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends { [ket: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [ket: string]: (...args:any[])=>any}> = ReturnType<PropertiesType<T>>

export type BaseThunkType<A extends Action, R= Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ThunkMiddleWare)))

// @ts-ignore
window.store = store

export default store

