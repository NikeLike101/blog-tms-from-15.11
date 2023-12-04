import blogTMSReducer, { BlogTMSReducerType } from './index';
import userReducer from '../userReducer';
import { setUserDataToStore } from '../userReducer/actions';
import { setAuthors } from './actions';


let state:BlogTMSReducerType

beforeEach(() => {
  state = {
    posts: {data: [], totalCount: 0},
    isLoading: false,
    searchString: '',
    activePost: null,
    editPostForDialog: null,
    authors: []
  }
})

describe('blogTMSReducer works successfully', () => {
  it('should ', () => {
    const mockAuthors: string[] = ['asd', 'zxc', 'qwe']

    const newState = blogTMSReducer(state, setAuthors(mockAuthors))
    
    expect(newState.authors.length).toBe(3)
  });
})