import {useNavigate} from "react-router-dom";
import { routeLocationsEnum } from "../router/Router";
import md5 from "md5";


type AuthUserInfo = {
    login: string
    password: string
}

type UserDataHash = {
    loginHash: string
    passwordHash: string
}

type AuthMethodsReturnType = {
    isSuccess: boolean
    error?: string
}


const useAuth = () => {

    const authUsers:UserDataHash[] = JSON.parse(localStorage.getItem('authInfo') || '[]')



    const register = (data: AuthUserInfo): AuthMethodsReturnType => {

        const dataHash: UserDataHash = {
            loginHash: md5(data.login),
            passwordHash: md5(data.password)
        }

        if (authUsers.find(userHash => userHash.loginHash === dataHash.loginHash)) {
            return {isSuccess: false, error: 'user with same login already exist'}
        }
        localStorage.setItem('authInfo', JSON.stringify([...authUsers, dataHash]))
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



    const login = (data: AuthUserInfo):AuthMethodsReturnType => {
        const foundUserFromStorage = authUsers.find(user => user.loginHash === md5(data.login))
        if (foundUserFromStorage) {
            console.log(foundUserFromStorage, 'user')
            if (md5(data.password) === foundUserFromStorage.passwordHash){
                localStorage.setItem('activeUser', `${data.login}`)
                return {isSuccess: true}
            } else {
                return {isSuccess: false, error: 'password is not correct'}
            }
        }
        return {isSuccess: false, error: 'user not found'}
    }
    return {  login, register}
}

export default useAuth