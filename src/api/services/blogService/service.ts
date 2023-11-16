import {CreatePostDataType, GetPostsFromTMSOptionsType, GetPostsFromTMSResponseType,} from "./types";



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



export const getPostsFromTMS = async (options?: GetPostsFromTMSOptionsType) => {
    const rawData = await fetch(`https://studapi.teachmeskills.by/blog/posts${getQueryParams(options)}`)
    const {results}:GetPostsFromTMSResponseType = await rawData.json()
    if (!results) return

    return results
}
export const getPostByIdFromTMS = async (postId: number) => {
    const rawData = await fetch(`https://studapi.teachmeskills.by/blog/posts/${postId}`)

    return await rawData.json()
}

export const createPostFromTMS = async (createPostData: CreatePostDataType) => {
    const rawData = await  fetch(`https://studapi.teachmeskills.by/blog/posts`, {method: 'POST', body: JSON.stringify(createPostData)})
    return await rawData.json()
}

export const generateImage = async () => {
    const rawData = await fetch('https://random.imagecdn.app/150/150')
    return await rawData.blob()
}