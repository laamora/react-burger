import {
  GET_FORGOT_REQUEST,
  GET_FORGOT_FAILED,
  GET_FORGOT_SUCCESS,
  GET_RESET_REQUEST,
  GET_RESET_SUCCESS,
  GET_RESET_FAILED,
  GET_REGISTER_REQUEST,
  GET_REGISTER_FAILED,
  GET_REGISTER_SUCCESS,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  CHANGE_USER_REQUEST,
  CHANGE_USER_SUCCESS,
  CHANGE_USER_FAILED,
} from "../actions/auth";

const defaultState = {
  forgotMessage: "",
  forgotRequest: false,
  forgotFailed: false,
  forgotSuccess: false,

  resetMessage: "",
  resetRequest: false,
  resetFailed: false,
  resetSuccess: false,

  registerFailed: false,
  registerRequest: false,
  registerSuccess: false,
  user: {
    name: "",
    email: "",
  },
  authRequest: false,
  authError: false,
  isAuth: false,

  logoutRequest: false,
  logoutSuccess: false,
  logoutFailed: false,

  getUserRequest: false,
  getUserFailed: false,
  getUserSuccess: false,

  changeUserRequest: false,
  changeUserSuccess: false,
  changeUserFailed: false,
};

export const auth = (state = defaultState, action) => {
  switch (action.type) {
    // forgot
    case GET_FORGOT_REQUEST: {
      return {
        ...state,
        forgotRequest: true,
      };
    }
    case GET_FORGOT_SUCCESS: {
      return {
        ...state,
        forgotSuccess: action.payload.success,
        forgotMessage: action.payload.message,
        forgotRequest: false,
        forgotFailed: false,
      };
    }
    case GET_FORGOT_FAILED: {
      return {
        ...state,
        forgotRequest: false,
        forgotFailed: true,
      };
    }

    //reset
    case GET_RESET_REQUEST: {
      return {
        ...state,
        resetRequest: true,
      };
    }
    case GET_RESET_SUCCESS: {
      return {
        ...state,
        resetSuccess: action.payload.success,
        resetMessage: action.payload.message,
        resetRequest: false,
        resetFailed: false,
        forgotMessage: "",
        forgotRequest: false,
        forgotFailed: false,
        forgotSuccess: false,
      };
    }
    case GET_RESET_FAILED: {
      return {
        ...state,
        resetRequest: false,
        resetFailed: true,
      };
    }

    // register
    case GET_REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
      };
    }
    case GET_REGISTER_SUCCESS: {
      return {
        ...state,
        registerSuccess: action.payload.success,
        user: { name: action.payload.name, email: action.payload.email },
        registerRequest: false,
        registerFailed: false,
      };
    }
    case GET_REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      };
    }

    // login
    case AUTH_REQUEST: {
      return {
        ...state,
        authRequest: true,
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        authRequest: false,
        authError: false,
        user: action.payload,
        isAuth: true,
      };
    }
    case AUTH_FAILED: {
      return {
        ...state,
        authRequest: false,
        authError: true,
        isAuth: false,
      };
    }

    //logout
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutRequest: true,
        logoutSuccess: false,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        logoutRequest: false,
        logoutSuccess: false,
        logoutFailed: false,
        user: {
          name: "",
          email: "",
        },
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutRequest: false,
        logoutSuccess: false,
        logoutFailed: true,
      };
    }

    // get user
    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserSuccess: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        getUserRequest: false,
        user: action.payload,
        getUserSuccess: true,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserSuccess: false,
        getUserFailed: true,
      };
    }

    //change user
    case CHANGE_USER_REQUEST: {
      return {
        ...state,
        changeUserRequest: true,
        changeUserSuccess: false,
        changeUserFailed: false,
      };
    }
    case CHANGE_USER_SUCCESS: {
      return {
        ...state,
        changeUserRequest: false,
        changeUserSuccess: true,
        changeUserFailed: false,
        user: action.payload,
      };
    }
    case CHANGE_USER_FAILED: {
      return {
        ...state,
        changeUserRequest: false,
        changeUserSuccess: false,
        changeUserFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};
