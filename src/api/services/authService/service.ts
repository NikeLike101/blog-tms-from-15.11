import { ActivationData, LoginData, LoginReturnType, SignUpDataType } from './types';
import { baseUrl } from '../../../constants';
import { AuthMethodsReturnType } from '../../../hooks/useAuth';


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

export const getAllUsers = async () => {
  const rawData = await fetch(`${baseUrl}/auth/users/`, {
    method: 'GET'
  })
  return await rawData.json()
}

