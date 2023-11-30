
export type UpdatePostsByDataType = {
  currentPage: number,
}



export type AddPostFormValueType = {
  image: string | null,
  title: string,
  description: string
}
export type EditPostFormValueType = {
  image: string | null,
  title: string,
  description: string,
  date: string,
  author: string
}