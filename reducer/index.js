import { LOGIN_USER, LOGIN_USER_SUCCESS, INPUT_TEXT_CHANGE, QUICK_BLOX_INIT_SUCCESS, QUICK_BLOX_INIT_FAILED, REGISTER_USER_SUCCESS } from '../constants/Redux';

const initialState = {
  username: '',
  fullName: '',
  email: '',
  country: '',
  password: '',
  isAgree: false,
  quickBloxError:"",
  quickBloxInit:false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case QUICK_BLOX_INIT_SUCCESS:
      return {
        ...state,
        quickBloxInit:true,
      }
    case QUICK_BLOX_INIT_FAILED:
      return{
        ...state,
        quickBloxError:"Something went wrong."
      }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case INPUT_TEXT_CHANGE:
        return {
            ...state,
            [action.payload.key]:action.payload.value
        }
    default:
        return state;
  }
};

export default reducer;
