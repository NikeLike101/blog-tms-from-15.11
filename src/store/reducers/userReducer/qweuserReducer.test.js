import { getLocalStorageWithTime } from '../../../utils/addTimeToExpireToStorage';
import userReducer, { UserReducerType } from './index';
import { clearUserDataFromStore, setAccessTokenToStore, setUserDataToStore } from './actions';
import {User} from '../../../models/User'

let state

beforeEach(()=>{
  state =  {
    user: null,
    accessToken: null
  }
})

describe('userReducer successful work', () => {
  it('should login work success', () => {
    const newState = userReducer(state, setUserDataToStore({email: 'zxc@asd.asd',password: '231231414'}))

    expect(newState.user?.password.length).toBeGreaterThan(0);

  });

  it('should login work success', () => {

    const newState = userReducer(state, setAccessTokenToStore('helloASDsadadwqe'))

    expect(newState.accessToken?.length).toBeGreaterThan(0);

  });
  it('should logout work success', () => {
    const newState = userReducer(state, clearUserDataFromStore())

    expect(newState.user).toBeNull();
  });
})