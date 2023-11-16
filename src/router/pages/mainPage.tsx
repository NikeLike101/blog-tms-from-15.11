import { Button } from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom";
import {routeLocationsEnum} from "../Router";


const MainPage:React.FC = () => {
    const navigation = useNavigate()
    return <>

    <Button variant={'outlined'} onClick={() => navigation(routeLocationsEnum.signIn)}>login</Button>
    <Button variant={'outlined'} onClick={() => navigation(routeLocationsEnum.signUp)}>register</Button>

    </>
}

export default MainPage