import { BlogPostFromTMS } from '../../models/User';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';


interface Props {
  post: BlogPostFromTMS
}


const PostItem:React.FC<Props> = ({post}) => {

  return  <Paper key={post.id}>
    <Typography>{post.title} {post.author}</Typography>
    <Box sx={{display: 'flex'}}>
      <Box sx={{width: '150px', height:'150px'}}><img style={{width: '100%', height: '100%'}} src={post.image}/></Box>
      <Box sx={{width: '60%'}}>
        <Typography>{post.text}</Typography>
        <Typography>{post.description}</Typography>
      </Box>
    </Box>
    {post.date}
  </Paper>
}

export default PostItem