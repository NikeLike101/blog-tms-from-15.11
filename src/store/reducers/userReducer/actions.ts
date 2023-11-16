import { User } from '../../../models/User';
import { UserReducerEnum } from './actionTypes';


export const setUserDataToStore = (userData: User) => {
    return {type: UserReducerEnum.LOGIN, userData}
}
export const clearUserDataFromStore = () => {
    return {type: UserReducerEnum.LOGOUT}
}