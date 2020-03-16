import React, {FC} from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType ={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onPageChanged:(p:number,portionNumber:number)=>void
    curPortionNumber:number
    users:Array<UserType>
    isAuth:()=>void
    followingInProgress:()=>void
    unfollow:()=>void
    follow:()=>void
}
let Users:FC <PropsType>= (props) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       curPortionNumber={props.curPortionNumber}
            />
            {
                props.users.map(u => <User user={u}
                                           isAuth={props.isAuth}
                                           key={u.id}
                                           followingInProgress={props.followingInProgress}
                                           unfollow={props.unfollow}
                                           follow={props.follow}
                />)
            }
        </div>
    )
};

export default Users;