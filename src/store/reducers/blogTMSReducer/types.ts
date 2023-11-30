import { BlogPostFromTMS } from '../../../models/User';


export type EditPostDialogDataType = { data: BlogPostFromTMS | null, isOpenStatus: boolean }
export type PostsDataType = { data: BlogPostFromTMS[], totalCount: number }