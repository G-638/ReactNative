import * as types from '../actions/types';
const initialState = {
  token: '',
  userObj: {
        fileUri:'',
        userName: '',
        dob: '',
        mobileNumber: '',
        address: ''
      },
};
const createReducer = (state = initialState, action) => {
  switch(action.type) {
  case types.SET_USER_DETAILS:
    return {
    ...state,
    userObj:action.payload
    };
    case types.SET_TOKEN:
    return {
    ...state,
    token: action.payload
    };
    case types.USER_LOG_OUT:
    return {
    token:''
    };
  default:
  return state;
}
}
export default createReducer;