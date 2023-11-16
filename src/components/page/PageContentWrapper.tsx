import React, { FC, PropsWithChildren } from 'react';
import {
    AppBar,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';
import { useAppSelector } from '../../store/store';
import { setDrawerClose, setDrawerOpen } from '../../store/reducers/drawerReducer/actions';
import { useDispatch } from 'react-redux';

import { Menu, NoteOutlined } from '@mui/icons-material';
import { routeLocationsEnum } from '../../router/Router';
import { useNavigate } from 'react-router-dom';
import useThemeColors from '../../hooks/useThemeColors';

interface Props extends PropsWithChildren{
    title?: string
}

const PageContentWrapper: FC<Props> = props => {
    const {children,title} = props
    const isOpen = useAppSelector(state => state.drawerReducer.isOpen)
    const dispatch = useDispatch()
    const {backgroundColor,cardText}=  useThemeColors()
    const navigation = useNavigate()


    const handleCloseDrawer = () => {
        dispatch(setDrawerClose())
    }
    const handleOpenDrawer = () => {
        dispatch(setDrawerOpen())
    }
    const handleNavigateToRoute = (route: routeLocationsEnum) => {
        navigation(route)
    }

    return <Box sx={{minHeight: '100vh', background: backgroundColor, color: cardText}}>
        <AppBar >
            <Toolbar>
                <Menu onClick={handleOpenDrawer}/>
                {title}
            </Toolbar>
        </AppBar>
        <Drawer anchor={"left"} open={isOpen} onClose={handleCloseDrawer}>
            <List>
                <ListItem>
                    <ListItemButton onClick={()=> handleNavigateToRoute(routeLocationsEnum.blogPage)}>
                        <ListItemIcon>
                            <NoteOutlined/>
                        </ListItemIcon>
                        <ListItemText>
                            Blog
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        <Box sx={{ position: 'relative', top: '64px' ,height: 'calc(100vh - 64px + 10px)', padding: '10px'}}>
            {children}
        </Box>

    </Box>
}

export default PageContentWrapper