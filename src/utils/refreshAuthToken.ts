import { getLocalStorageWithTime, setLocalStorageWithTime } from './addTimeToExpireToStorage';
import { AuthMethodsReturnType } from '../hooks/useAuth';
import md5 from 'md5';


const refreshAuthToken = (refreshToken: string) => {
  const newAuthToken = md5(`${refreshToken}`)
  return { authToken: newAuthToken, refreshToken: md5(newAuthToken) }
}

export const refresh = async ():Promise<AuthMethodsReturnType> => {
  console.log('trying to get new authToken');
  const oldRefreshToken = getLocalStorageWithTime('refreshToken')
  if (oldRefreshToken === false) {
    localStorage.removeItem('authToken')
    localStorage.removeItem('refreshToken')
    return { isSuccess: false }
  }
  const { authToken, refreshToken } = refreshAuthToken(oldRefreshToken)
  setLocalStorageWithTime('authToken', authToken, 30000)
  setLocalStorageWithTime('refreshToken', refreshToken, 60000)
  console.log('new tokens collected');
  return {isSuccess: true}
}