import { ActivationData, LoginData, LoginReturnType, SignUpDataType } from './types';
import { baseUrl } from '../../../constants';
import { AuthMethodsReturnType } from '../../../hooks/useAuth';
import { getLocalStorageWithTime, setLocalStorageWithTime } from '../../../utils/addTimeToExpireToStorage';
import { store } from '../../../store/store';
import { UserReducerEnum } from '../../../store/reducers/userReducer/actionTypes';


export const signUp = async (signUpData: SignUpDataType) => {
  const rawData = await fetch(`${baseUrl}/auth/users/`, {
    method: 'POST',
    body:JSON.stringify(signUpData),
    headers: {
    'Content-Type': 'application/json'
    }})
  return await rawData.json()
}

export const activation = async (activationData: ActivationData):Promise<AuthMethodsReturnType> => {
  const rawData = await fetch(`${baseUrl}/auth/users/activation/`, {
    method: 'POST',
    body: JSON.stringify(activationData),
    headers: {
      'Content-Type': 'application/json'
    }
    // qwettrtyr1221

  })
  return { isSuccess: rawData.status === 204 }
}

export const login = async (loginData:LoginData):Promise<LoginReturnType> => {
  const rawData = await fetch(`${baseUrl}/auth/jwt/create/`, {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return await rawData.json()
}

export const refreshAccessToken = async (): Promise<AuthMethodsReturnType> => {
  const refreshToken = getLocalStorageWithTime('refreshToken')
  if (refreshToken === false) {
    store.dispatch({ type: 'LOGOUT_BY_REFRESH' })

    store.dispatch({type: UserReducerEnum.SET_ACCESS_TOKEN, accessToken: null})
    return {isSuccess: false, error: 'refresh token invalid'}
  }
  const rawData = await fetch(`${baseUrl}/auth/jwt/refresh/`, {
    method: 'POST',
    body: JSON.stringify({ refresh: refreshToken }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data:{access:string} = await rawData.json()
  setLocalStorageWithTime('authToken', data.access, 30000)

  store.dispatch({type: UserReducerEnum.SET_ACCESS_TOKEN, accessToken: data.access})
  return { isSuccess: rawData.ok }
}

export const getAllUsers = async () => {
  const rawData = await fetch(`${baseUrl}/auth/users/`, {
    method: 'GET'
  })
  return await rawData.json()
}

