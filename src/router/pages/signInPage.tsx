import {BaseSyntheticEvent, useState} from "react";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import PageContentWrapper from "../../components/page";
import {useAppDispatch} from "../../store/store";
import { setAccessTokenToStore, setUserDataToStore } from '../../store/reducers/userReducer/actions';
import md from 'md5'
import { routeLocationsEnum } from "../Router";
import {ArrowBack} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import { login } from '../../api/services/authService/service';
import { LoginFailureReturnType, LoginReturnType, LoginSuccessReturnType } from '../../api/services/authService/types';
import { setLocalStorageWithTime } from '../../utils/addTimeToExpireToStorage';



const isLoginFailure = (loginData: LoginReturnType):loginData is LoginFailureReturnType => {
    if ((loginData as LoginFailureReturnType)?.detail) {
        return true
    }

    return false

}
const SignInPage = () => {
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

    const handleLogin =async () => {

        const loginReturnData  = await login({email: loginValue , password: passwordValue})
        console.log(loginReturnData);

        if (isLoginFailure(loginReturnData)) {
            setLoginError('creds')
            return
        }

        const loginSuccess = loginReturnData as LoginSuccessReturnType
        setLocalStorageWithTime('refreshToken', loginSuccess.refresh, 30000000)
        setLocalStorageWithTime('authToken', loginSuccess.access, 30000)

        dispatch(setUserDataToStore({email: loginValue, password: passwordValue}))
        dispatch(setAccessTokenToStore(loginSuccess.access))
        navigation(routeLocationsEnum.blogPage)

    }

    return <PageContentWrapper>
        <IconButton onChange={()=> navigation(routeLocationsEnum.main)}><ArrowBack/></IconButton>
    <input value={loginValue} onChange={handleLoginValueChange}/>
    <input value={passwordValue} onChange={handlePasswordValueChange}/>
        {loginError && <div style={{color: '#f00'}}>{loginError}</div>}
        <button onClick={handleLogin}>login</button>
    </PageContentWrapper>
}

export default SignInPage