import {Reducer} from "@reduxjs/toolkit";
import {User} from "../../../models/User";
import {UserReducerEnum} from "./actionTypes";
import { getLocalStorageWithTime } from '../../../utils/addTimeToExpireToStorage';


export type UserReducerType = {
    user: User | null | undefined
    accessToken: string | null

}

const defaultState:UserReducerType = {
    user: null,
    accessToken: getLocalStorageWithTime('authToken') === false ? getLocalStorageWithTime('authToken') as string : null
}


const userReducer: Reducer<UserReducerType> = (state = defaultState, action) => {
    switch (action.type) {
        case UserReducerEnum.LOGIN:
            return {...state, user: action.userData}
        case UserReducerEnum.LOGOUT:
            return {...state, user: null}
        case UserReducerEnum.LOGOUT_BY_REFRESH:
            return {...state, user: null}
        case UserReducerEnum.SET_ACCESS_TOKEN:
            return {...state, accessToken: action.accessToken}
        default:
            return {...state}
    }
}

export default userReducer