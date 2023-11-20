import {CreatePostDataType, GetPostsFromTMSOptionsType, GetPostsFromTMSResponseType,} from "./types";
import { getLocalStorageWithTime } from '../../../utils/addTimeToExpireToStorage';
import { refresh } from '../../../utils/refreshAuthToken';
import { store } from '../../../store/store';
import { UserReducerEnum } from '../../../store/reducers/userReducer/actionTypes';



const getQueryParams = (options: any) => {
if(options === undefined) return  ''
    if ( Object.keys(options).filter(key  => options[key] !== undefined).length === 0 ) {
        return ''
    }
    let queryParamsString: string ='?'
    Object.keys(options).forEach((key, index, arr) => {
        queryParamsString+= `${key}=${options[key]}${index ===  arr.length -1 ? '' : '&'}`
    })
    return queryParamsString
}




export const getPostByIdFromTMS = async (postId: number) => {
    const rawData = await fetch(`https://studapi.teachmeskills.by/blog/posts/${postId}`)

    return await rawData.json()
}

export const getPostsFromTMS = async (options?: GetPostsFromTMSOptionsType) => {

    let authToken = getLocalStorageWithTime('authToken')
    if (authToken === false) {
        const response = await refresh()
        if (!response) {
            store.dispatch({ type: UserReducerEnum.LOGOUT_BY_REFRESH })
            return false

        }
    }

    authToken = getLocalStorageWithTime('authToken') as string

    const rawData = await fetch(`https://studapi.teachmeskills.by/blog/posts${getQueryParams(options)}`)
    const {results}:GetPostsFromTMSResponseType = await rawData.json()
    if (!results) return

    return results
}

export const createPostFromTMS = async (createPostData: CreatePostDataType) => {

    let authToken = getLocalStorageWithTime('authToken')
    if (authToken === false) {
        const response = await refresh()
        if (!response) {
            store.dispatch({ type: UserReducerEnum.LOGOUT_BY_REFRESH })
            return false
        }
    }

    authToken = getLocalStorageWithTime('authToken')
    const rawData = await  fetch(`https://studapi.teachmeskills.by/blog/posts/`,
                                 {method: 'POST', body: JSON.stringify(createPostData)})
    return await rawData.json()
}

export const generateImage = async () => {

    let authToken = getLocalStorageWithTime('authToken')
    if (authToken === false) {
        const response = await refresh()
        if (!response) {
            store.dispatch({ type: UserReducerEnum.LOGOUT_BY_REFRESH })
            return false
        }
    }

    authToken = getLocalStorageWithTime('authToken')

    const rawData = await fetch('https://random.imagecdn.app/150/150')
    return await rawData.blob()
}