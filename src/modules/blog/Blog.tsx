import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getBlogPostsToStoreFromTMS} from "../../store/reducers/blogTMSReducer/actions";
import {Paper, Stack, Typography, Box, IconButton, Dialog, DialogTitle, DialogContent} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";
import AddPostDialog from "./AddPostDialog";


const Blog:React.FC = () => {
    const dispatch = useAppDispatch()
    const {posts} = useAppSelector(state => state.blogTMSReducer)
    const [isAddPostDialogOpen, setIsAddPostDialogOpen] = useState<boolean>(false);
    const handleChangeDialogIsOpenStatus = (newStatus: boolean) => {
        setIsAddPostDialogOpen(newStatus)
    }
    useEffect(() => {
    dispatch(getBlogPostsToStoreFromTMS({offset: 0, search: 'ф'}))
        dispatch(getBlogPostsToStoreFromTMS({ordering: 'title', search: 't'}))
       dispatch( getBlogPostsToStoreFromTMS({limit: 1, search: 'фы'}))
       dispatch( getBlogPostsToStoreFromTMS())
       dispatch( getBlogPostsToStoreFromTMS({limit: 1, search: 'ф', offset: 1, ordering: 'title', author__course_group: 1}))
    }, []);
    useEffect(() => {
        console.log(posts, 'posts')
    }, [posts]);



    return <>
        <Stack>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Posts</Typography>
            <IconButton onClick={()=> handleChangeDialogIsOpenStatus(true)} ><AddOutlined/></IconButton>
            </Box>
            {posts.map(post =>
                <Paper>
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
            )}

        </Stack>
        <AddPostDialog open={isAddPostDialogOpen} onClose={() => setIsAddPostDialogOpen(false)}/>
    </>
}

export default Blog