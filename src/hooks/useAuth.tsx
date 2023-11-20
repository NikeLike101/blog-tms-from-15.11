import {useNavigate} from "react-router-dom";
import { routeLocationsEnum } from "../router/Router";
import md5 from "md5";
import { SignUpDataType } from '../api/services/authService/types';
import { signUp } from '../api/services/authService/service';
import { getLocalStorageWithTime, setLocalStorageWithTime } from '../utils/addTimeToExpireToStorage';



type UserDataHash = {
    loginHash: string
    passwordHash: string
}

export type AuthMethodsReturnType = {
    isSuccess: boolean
    error?: string
}


const signUpLocal = ({ username,password,email,course_group }:SignUpDataType) => {

    const authToken = md5(`${username}|${password}|${email}|${course_group}`) // 1 min 60000
    const refreshToken = md5(`${authToken}|${username}|${password}|${email}|${course_group}`) // 5 min 300000
    return {authToken, refreshToken}
}




const useAuth = () => {



    const register = async (data: SignUpDataType): Promise<AuthMethodsReturnType> => {
        const responseData = await signUpLocal(data)
        setLocalStorageWithTime('authToken', responseData.authToken, 60000)
        setLocalStorageWithTime('refreshToken', responseData.refreshToken, 300000)

        console.log(responseData, 'data');

        return {isSuccess: true}

    }



//register
    // user: nikita password: 123456 ->
    // passwordHash: md5('123456') -> asokdsandianocnsaodnqo1eo2n3o1nckodasndcoasndjosand1



//login
    // user: nikita password: 123456
    //md5(password) === passwordHash

    // // user: nikita password: 654321
    //



    const login = (data: SignUpDataType):AuthMethodsReturnType => {

        return {isSuccess: false, error: 'user not found'}
    }
    return {  login, register}
}

export default useAuth