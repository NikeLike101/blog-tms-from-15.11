import { Reducer} from "@reduxjs/toolkit";

import {DrawerReducerEnum} from "./actionsTypes";


type DrawerReducerType = {
    isOpen: boolean
}

const defaultState:DrawerReducerType = {
    isOpen: false
}


const drawerReducer: Reducer<DrawerReducerType> = (state = defaultState, action) => {
    switch (action.type) {
        case DrawerReducerEnum.SET_DRAWER_OPEN:
            return {...state, isOpen: true}
        case DrawerReducerEnum.SET_DRAWER_CLOSE:
            return {...state, isOpen: false}
        default:
            return {...state}
    }
}

export default drawerReducer