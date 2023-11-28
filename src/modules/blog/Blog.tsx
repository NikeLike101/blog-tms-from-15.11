import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getBlogPostsToStoreFromTMS} from "../../store/reducers/blogTMSReducer/actions";
import {Paper, Stack, Typography, Box, IconButton, Dialog, DialogTitle, DialogContent} from "@mui/material";
import {AddOutlined} from "@mui/icons-material";
import AddPostDialog from "./addPostDialog/AddPostDialog";
import { me } from '../../api/services/blogService/service';
import PostList from './PostList';
import Pagination from '../../components/pagination';
import { UpdatePostsByDataType } from './types';


const cardsPerPage = 100

const Blog:React.FC = () => {
    const dispatch = useAppDispatch()
    const {posts : dataPosts} = useAppSelector(state => state.blogTMSReducer)
    const {totalCount, data: posts} = dataPosts
    const [isAddPostDialogOpen, setIsAddPostDialogOpen] = useState<boolean>(false);
    const [activePage, setActivePage] = useState<number>(1);

    useEffect(() => {
        dispatch(getBlogPostsToStoreFromTMS({offset: 0, limit: cardsPerPage}))
        console.log(me())
        //  dispatch(getBlogPostsToStoreFromTMS({ordering: 'title', search: 't'}))
        // dispatch( getBlogPostsToStoreFromTMS({limit: 1, search: 'фы'}))
        // dispatch( getBlogPostsToStoreFromTMS())
        // dispatch( getBlogPostsToStoreFromTMS({limit: 1, search: 'ф', offset: 1, ordering: 'title', author__course_group: 1}))
    }, []);

    useEffect(() => {
        console.log(posts, 'posts')
    }, [posts]);




    const updatePosts = (data:UpdatePostsByDataType) => {
        const {currentPage} = data
        setActivePage(currentPage)

        dispatch(getBlogPostsToStoreFromTMS({offset: (currentPage-1) * cardsPerPage, limit: cardsPerPage}))

    }

    const handleChangeDialogIsOpenStatus = (newStatus: boolean) => {
        setIsAddPostDialogOpen(newStatus)
    }


    const handlePageChange = (newPage: number) => {
        updatePosts({currentPage: newPage})
    }




    return <>
        <Stack sx={{ paddingBottom: '20px'}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography>Posts</Typography>
            <IconButton onClick={()=> handleChangeDialogIsOpenStatus(true)} ><AddOutlined/></IconButton>
            </Box>
           <PostList posts={posts}/>
            <Pagination count={totalCount} rowsPerPage={cardsPerPage} onPageChange={handlePageChange} activePage={activePage}/>
        </Stack>
        <AddPostDialog open={isAddPostDialogOpen} onClose={() => setIsAddPostDialogOpen(false)}/>
    </>
}

export default Blog