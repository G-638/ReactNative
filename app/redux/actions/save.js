import * as types from '../constants';

export function setUserDetails(userObj) {
    return {
            type: types.SET_USER_DETAILS,
            payload: userObj
    }
}