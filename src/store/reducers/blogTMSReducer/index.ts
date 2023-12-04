import { BlogPostFromTMS } from '../../../models/User';
import { Reducer } from '@reduxjs/toolkit';
import { BlogTMSReducerEnum } from './actionsTypes';
import { PostsDataType } from './types';


export type BlogTMSReducerType = {
    posts: PostsDataType
    isLoading: boolean
    searchString: string
    activePost: BlogPostFromTMS | null
    editPostForDialog: BlogPostFromTMS | null
    authors: string[]
}

const defState:BlogTMSReducerType = {

    posts: {data: [], totalCount: 0},
    isLoading: false,
    searchString: '',
    activePost: null,
    editPostForDialog: null,
    authors: []
}


const blogTMSReducer: Reducer<BlogTMSReducerType> = (state = defState, action) => {

    switch (action.type) {
        case BlogTMSReducerEnum.SET_BLOG_USERS_TMS:
            return {...state, users: action.users}
        case BlogTMSReducerEnum.SET_BLOG_POSTS_TMS:
            return {...state, posts: {...state.posts,data: action.posts, }}
        case BlogTMSReducerEnum.SET_BLOG_POSTS_WITH_COUNT_TMS:
            return {...state, posts: action.data}
        case BlogTMSReducerEnum.SET_SELECTED_BLOG_USER_ID_TMS:
            return {...state, selectedUserId: action.selectedUserId}
        case BlogTMSReducerEnum.SET_COMMENTS_MODAL_STATUS_TMS:
            return  {...state, commentsModalStatus: action.newStatus}
        case BlogTMSReducerEnum.SET_IS_LOADING_STATUS_TMS:
            return  {...state, isLoading: action.newStatus}
        case BlogTMSReducerEnum.SET_SEARCH_STRING_TMS:
            return  {...state, searchString: action.newSearchString}
        case BlogTMSReducerEnum.SET_COMMENTS_TMS:
            return  {...state, comments: action.comments}
        case BlogTMSReducerEnum.SET_ACTIVE_POST_TMS:
            return  {...state, activePost: action.activePost}
        case BlogTMSReducerEnum.SET_EDIT_POST_DIALOG_DATA:
            return  {...state, editPostForDialog: action.editPostForDialog}
        case BlogTMSReducerEnum.SET_AUTHORS:
            return  {...state, authors: action.authors}
        default:
            return {...state}
    }
}

export default blogTMSReducer