import { call, put, takeEvery } from 'redux-saga/effects'
import { API, initError, constructFetchConfig } from '../../../utilities'

export const USER_LOGIN: string = 'react-template/USER_LOGIN'
export const USER_LOGIN_SUCCESS: string = 'react-template/USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED: string = 'react-template/USER_LOGIN_FAILED'

const userLoginApi: object = {
  [USER_LOGIN]: '/api/login',
}

interface IActionType {
  type: string
  username?: string
  password?: string
  payload?: object
  error?: object
}

interface ILoginState {
  username: string | undefined
  password: string | undefined
  userInfo: object | undefined | null
  error: object | undefined
  loginSuccess: boolean
}

const initialState: ILoginState = {
  username: undefined,
  password: undefined,
  userInfo: null,
  error: undefined,
  loginSuccess: false,
}

//reducer
export default (state: ILoginState = initialState, action: IActionType): ILoginState => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        username: action.username,
        password: action.password,
        loginSuccess: false,
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        password: undefined,
        userInfo: action.payload,
        loginSuccess: true,
      }
    case USER_LOGIN_FAILED:
      return {
        ...state,
        username: undefined,
        password: undefined,
        loginSuccess: false,
        error: action.error,
      }
    default:
      return state
  }
}

// action
export const login = function(username: string, password: string): IActionType {
  return {
    type: USER_LOGIN,
    username,
    password,
  }
}

export const loginSuccess = function(payload: object): IActionType {
  return {
    type: USER_LOGIN_SUCCESS,
    payload,
  }
}

export const loginError = function(error: object): IActionType {
  return {
    type: USER_LOGIN_FAILED,
    error,
  }
}

// saga
function* loginSaga(action: IActionType) {
  const { url, config } = constructFetchConfig(userLoginApi[action.type], 'POST', {
    email: action.username,
    password: action.password,
  })
  try {
    const payload = yield call(API, url, config)
    yield put(loginSuccess(payload))
  } catch (error) {
    yield put(error(yield call(initError, url, error)))
  }
}

export function* watchLogin() {
  yield takeEvery(USER_LOGIN, loginSaga)
}
