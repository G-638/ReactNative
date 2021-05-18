import { SET_USER_DETAILS } from '../actions/types';
const initialState = { 
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
  default:
  return state;
}
}
export default createReducer;