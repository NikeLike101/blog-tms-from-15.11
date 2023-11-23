import { getLocalStorageWithTime } from './addTimeToExpireToStorage';
import { AuthMethodsReturnType } from '../hooks/useAuth';

import { refreshAccessToken } from '../api/services/authService/service';
import { store } from '../store/store';
import { UserReducerEnum } from '../store/reducers/userReducer/actionTypes';






export const refresh = async ():Promise<AuthMethodsReturnType> => {
  console.log('trying to get new authToken');
  const oldRefreshToken = getLocalStorageWithTime('refreshToken')
  if (oldRefreshToken === false) {
    localStorage.removeItem('authToken')
    localStorage.removeItem('refreshToken')
    return { isSuccess: false }
  }
  const {isSuccess} = await refreshAccessToken()
  console.log('new token collected', isSuccess);
  return { isSuccess }
}