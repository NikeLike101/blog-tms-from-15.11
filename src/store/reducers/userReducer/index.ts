import {Reducer} from "@reduxjs/toolkit";
import {User} from "../../../models/User";
import {UserReducerEnum} from "./actionTypes";


type UserReducerType = {
    user: User | null

}

const defaultState:UserReducerType = {
    user: null
}


const userReducer: Reducer<UserReducerType> = (state = defaultState, action) => {
    switch (action.type) {
        case UserReducerEnum.LOGIN:
            return {...state, user: action.userData}
        case UserReducerEnum.LOGOUT:
            return {...state, user: null}
        default:
            return {...state}
    }
}

export default userReducer