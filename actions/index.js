import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  INPUT_TEXT_CHANGE,
  QUICK_BLOX_INIT_SUCCESS,
  QUICK_BLOX_INIT_FAILED,
} from '../constants/Redux';

import QB from 'quickblox-react-native-sdk';
// import { appSettings } from '../utils';

export const initQuickBlox = () => {
  return (dispatch) => {
    // QB.settings.init(appSettings).then(()=>{
    //   dispatch({type:QUICK_BLOX_INIT_SUCCESS})
    // }).catch((err)=>{
    //   dispatch({type:QUICK_BLOX_INIT_FAILED})
    // })
  };
};

export const loginUser = (login) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {},
  };
};

export const registerUser = (register) => {
  if (register.password == register.confirm) {
    return {
      type: LOGIN_USER_SUCCESS,
      payload: {},
    };
  } else {
    return {
      type: LOGIN_USER_FAILED,
      payload: 'Confirm password does not match.',
    };
  }
};

export const inputTextChange = (key, value) => {
  return {
    type: INPUT_TEXT_CHANGE,
    payload: { key, value },
  };
};
