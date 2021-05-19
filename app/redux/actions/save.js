import * as types from './types';

export function setUserDetails(userObj) {
    return {
        type: types.SET_USER_DETAILS,
        payload: userObj
    }
}

export function setUserLogin(params, failureFunc,successFunc) {
    return {
        type: types.SET_USER_LOGIN,
        params,failureFunc,successFunc
    }
}

export function setToken(successFunc) {
    return {
        type: types.SET_TOKEN,
        payload: successFunc
    }
}