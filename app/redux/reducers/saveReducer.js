import { SET_USER_DETAILS } from '../constants';
const initialState = {
  // username:'' , 
  userObj: {
        fileUri:'',
        userName: '',
        dob: '',
        // language: '',
        mobileNumber: '',
        address: ''
      },
};
const createReducer = (state = initialState, action) => {
  console.log(action);
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