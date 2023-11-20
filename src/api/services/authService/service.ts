import { SignUpDataType } from './types';
import { baseUrl } from '../../../constants';


export const signUp = async (signUpData: SignUpDataType) => {
  const rawData = await fetch(`${baseUrl}/auth/users/`, {
    method: 'POST',
    body:JSON.stringify(signUpData),
    headers: {
    'Content-Type': 'application/json'
    }})
  return await rawData.json()
}

export const getAllUsers = async () => {
  const rawData = await fetch(`${baseUrl}/auth/users/`, {
    method: 'GET'
  })
  return await rawData.json()
}

