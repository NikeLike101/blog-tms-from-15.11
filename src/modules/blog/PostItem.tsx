import { BlogPostFromTMS } from '../../models/User';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import { Edit } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setEditPostDialogDataFromTMS } from '../../store/reducers/blogTMSReducer/actions';


interface Props {
  post: BlogPostFromTMS
}


const PostItem:React.FC<Props> = ({post}) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setEditPostDialogDataFromTMS(post))
  }


  return  <Paper sx={{position: 'relative'}} key={post.id}>
    <IconButton sx={{position: 'absolute', top: 10, right: 10}} onClick={handleClick} ><Edit/></IconButton>
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