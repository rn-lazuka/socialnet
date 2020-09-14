import {instance, ApiResponseType} from './api'
import {UserType} from '../types/types'

type GetUsersResponseType={
  items:Array<UserType>
  totalCount: number
  error: string
}

export const UsersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
  },
  onFollowClick(id: number) {
    return instance.post<ApiResponseType>(`follow/${id}`).then(res => res.data)
  },
  onUnFollowClick(id: number) {
    return instance.delete<ApiResponseType>(`follow/${id}`).then(res => res.data)
  }
}