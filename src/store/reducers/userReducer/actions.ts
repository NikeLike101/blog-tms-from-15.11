import { User } from '../../../models/User';
import { UserReducerEnum } from './actionTypes';


export const setUserDataToStore = (userData: User) => {
    return {type: UserReducerEnum.LOGIN, userData}
}

export const setAccessTokenToStore = (accessToken: string) => {
    return {type: UserReducerEnum.SET_ACCESS_TOKEN, accessToken}
}
export const clearUserDataFromStore = () => {
    return {type: UserReducerEnum.LOGOUT}
}