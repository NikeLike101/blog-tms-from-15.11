import React, { BaseSyntheticEvent, useReducer, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import PageContentWrapper from "../../components/page";
import {useAppDispatch} from "../../store/store";
import {routeLocationsEnum} from "../Router";
import { Button, IconButton, Stack, TextField } from '@mui/material';
import {ArrowBack} from "@mui/icons-material";
import { activation } from '../../api/services/authService/service';


const SignUpPage = () => {
    const {register} = useAuth()
    const navigation = useNavigate()
    const dispatch = useAppDispatch()
    const [loginValue, setLoginValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [emailValue, setEmailValue] = useState<string>('');
    const [userId, onChangeUserId] = useReducer((_: string, e:BaseSyntheticEvent) => e.target.value, '');
    const [token, onChangeToken] = useReducer((_: string, e:BaseSyntheticEvent) => e.target.value, '');
    const [groupValue, setGroupValue] = useState<number>(1);
    const [loginError, setLoginError] = useState<string | undefined>(undefined);
    const [showSecondStep, setShowSecondStep] = useState<boolean>(false);

    const handlePasswordValueChange = (e: BaseSyntheticEvent) => {
        setPasswordValue(e.target.value)
    }
    const handleLoginValueChange = (e:BaseSyntheticEvent) => {
        setLoginValue(e.target.value)
    }
    const handleEmailValueChange = (e: BaseSyntheticEvent) => {
        setEmailValue(e.target.value)
    }
    const handleGroupValueChange = (e:BaseSyntheticEvent) => {
        setGroupValue(e.target.value)
    }

    const handleSignUp = async () => {
        // dispatch(setUserDataToStore({login: loginValue, password: passwordValue, passwordHash: md(passwordValue), sessionStartDate: Date.now()}))

        const {isSuccess, error} = await register({username: loginValue, password: passwordValue, email: emailValue, course_group: groupValue})

        if (!isSuccess) {
            setLoginError(error)
            return;
        }

        setShowSecondStep(true)



    }

    const handleActivate =async () => {
        const {isSuccess} = await activation({ uid: userId, token })

        if (isSuccess) {
            navigation(routeLocationsEnum.signIn)
        }
    }

    return <PageContentWrapper>

        <IconButton onChange={()=> navigation(routeLocationsEnum.main)}><ArrowBack/></IconButton>


        {!showSecondStep ? <Stack sx={{ gap: '5px' }}>
            <TextField label='username' placeholder='username' value={loginValue} onChange={handleLoginValueChange} />
            <TextField label='password' placeholder='password' value={passwordValue}
                       onChange={handlePasswordValueChange} />
            <TextField label='email' placeholder='email' value={emailValue} onChange={handleEmailValueChange} />
            <TextField label='group' placeholder='group' type='number' value={groupValue}
                       onChange={handleGroupValueChange} />
            {loginError && <div style={{ color: '#f00' }}>{loginError}</div>}
            <Button onClick={handleSignUp}>sign up</Button>
        </Stack>
           : <Stack>
              check mail
              http://studapi.teachmeskills.by//activate/{"{"}user id{"}"}/{"{"}token{"}"}
              <TextField label='user id' placeholder='user id' value={userId} onChange={onChangeUserId} />
              <TextField label='token' placeholder='token' value={token} onChange={onChangeToken}/>

              <Button onClick={handleActivate}>activate</Button>
          </Stack>
        }

    </PageContentWrapper>
}

export default SignUpPage