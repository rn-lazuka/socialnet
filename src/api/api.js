import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "6d54c1cb-0079-4662-b13d-27d4ae8cf67d"}
});

export const UsersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    onFollowClick(id, follow,toggleIsFollowingProgress) {
        toggleIsFollowingProgress(true,id);
        return instance.post(`follow/${id}`)
            .then(response => {
                if (response.data.resultCode === 0) {
                    follow(id)
                }
                toggleIsFollowingProgress(false,id)
            });
    },
    onUnFollowClick(id, unfollow,toggleIsFollowingProgress) {
        toggleIsFollowingProgress(true,id);
        return instance.delete(`follow/${id}`)
            .then(response => {
                if (response.data.resultCode === 0) {
                    unfollow(id)
                }
                toggleIsFollowingProgress(false,id)
            });
    }
};
export const AuthAPI = {
    authMe(setAuthUserData) {
        return instance.get(`auth/me`)
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    setAuthUserData(id, email, login);
                }
            });
    }
}