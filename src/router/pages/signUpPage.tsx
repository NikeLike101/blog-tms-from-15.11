import {BaseSyntheticEvent, useState} from "react";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import PageContentWrapper from "../../components/page";
import {useAppDispatch} from "../../store/store";
import {clearUserDataFromStore, setUserDataToStore} from "../../store/reducers/userReducer/actions";
import md from 'md5'
import {routeLocationsEnum} from "../Router";
import {IconButton} from "@mui/material";
import {ArrowBack} from "@mui/icons-material";


const SignUpPage = () => {
    const {register} = useAuth()
    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const [loginValue, setLoginValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [loginError, setLoginError] = useState<string | undefined>(undefined);

    const handlePasswordValueChange = (e: BaseSyntheticEvent) => {
        setPasswordValue(e.target.value)
    }
    const handleLoginValueChange = (e:BaseSyntheticEvent) => {
        setLoginValue(e.target.value)
    }

    const handleLogin = () => {
        // dispatch(setUserDataToStore({login: loginValue, password: passwordValue, passwordHash: md(passwordValue), sessionStartDate: Date.now()}))

        const {isSuccess, error} = register({login: loginValue, password: passwordValue})

        if (!isSuccess) {
            setLoginError(error)
            return;
        }

        navigation(routeLocationsEnum.main)


    }
    const handleLogout = () => {
        dispatch(clearUserDataFromStore())
    }

    return <PageContentWrapper>

        <IconButton onChange={()=> navigation(routeLocationsEnum.main)}><ArrowBack/></IconButton>
    <input value={loginValue} onChange={handleLoginValueChange}/>
    <input value={passwordValue} onChange={handlePasswordValueChange}/>
        {loginError && <div style={{color: '#f00'}}>{loginError}</div>}
        <button onClick={handleLogin}>login</button>
        <button onClick={handleLogout}>logout</button>
    </PageContentWrapper>
}

export default SignUpPage