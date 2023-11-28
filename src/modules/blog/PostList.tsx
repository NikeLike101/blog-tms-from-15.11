import { BlogPostFromTMS } from '../../models/User';
import { Stack } from '@mui/material';
import React from 'react';
import PostItem from './PostItem';


interface Props {
  posts: BlogPostFromTMS[]
}

const PostList:React.FC<Props> = ({posts}) => {


  return <Stack> {posts.map(post =>
   <PostItem post={post} />
  )}</Stack>
}

export default PostList