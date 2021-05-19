import { SET_TOKEN, SET_USER_DETAILS, USER_LOGIN_API } from '../actions/types';
const initialState = {
  successFunc: '',
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
  case SET_USER_DETAILS:
    return {
    ...state,
    userObj:action.payload
    };
    case SET_TOKEN:
    return {
    ...state,
    successFunc: action.payload
    };
  default:
  return state;
}
}
export default createReducer;