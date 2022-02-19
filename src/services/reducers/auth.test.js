import { auth } from "./auth";
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
  TAuth,
} from "../actions/auth";

describe("auth reducer", () => {
  it("auth reducer initial state", () => {
    expect(auth(undefined, {})).toEqual({
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
    });
  });

  it("GET_FORGOT_REQUEST", () => {
    expect(auth(undefined, { type: GET_FORGOT_REQUEST })).toEqual({
      forgotMessage: "",
      forgotRequest: true,
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
    });
  });

  it("GET_FORGOT_FAILED", () => {
    expect(auth(undefined, { type: GET_FORGOT_FAILED })).toEqual({
      forgotMessage: "",
      forgotRequest: false,
      forgotFailed: true,
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
    });
  });

  it("GET_FORGOT_SUCCESS", () => {
    expect(
      auth(undefined, {
        type: GET_FORGOT_SUCCESS,
        payload: { message: "message", success: true },
      })
    ).toEqual({
      forgotMessage: "message",
      forgotRequest: false,
      forgotFailed: false,
      forgotSuccess: true,

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
    });
  });

  it("GET_RESET_REQUEST", () => {
    expect(auth(undefined, { type: GET_RESET_REQUEST })).toEqual({
      forgotMessage: "",
      forgotRequest: false,
      forgotFailed: false,
      forgotSuccess: false,

      resetMessage: "",
      resetRequest: true,
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
    });
  });

  it("GET_RESET_SUCCESS", () => {
    expect(
      auth(undefined, {
        type: GET_RESET_SUCCESS,
        payload: { message: "message", success: true },
      })
    ).toEqual({
      forgotMessage: "",
      forgotRequest: false,
      forgotFailed: false,
      forgotSuccess: false,

      resetMessage: "message",
      resetRequest: false,
      resetFailed: false,
      resetSuccess: true,

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
    });
  });

  it("GET_RESET_FAILED", () => {
    expect(
      auth(undefined, {
        type: GET_RESET_FAILED,
      })
    ).toEqual({
      forgotMessage: "",
      forgotRequest: false,
      forgotFailed: false,
      forgotSuccess: false,

      resetMessage: "",
      resetRequest: false,
      resetFailed: true,
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
    });
  });

  it("GET_REGISTER_REQUEST", () => {
    expect(
      auth(undefined, {
        type: GET_REGISTER_REQUEST,
      })
    ).toEqual({
      forgotMessage: "",
      forgotRequest: false,
      forgotFailed: false,
      forgotSuccess: false,

      resetMessage: "",
      resetRequest: false,
      resetFailed: false,
      resetSuccess: false,

      registerFailed: false,
      registerRequest: true,
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
    });
  });

  it("GET_REGISTER_FAILED", () => {
    expect(
      auth(undefined, {
        type: GET_REGISTER_FAILED,
      })
    ).toEqual({
      forgotMessage: "",
      forgotRequest: false,
      forgotFailed: false,
      forgotSuccess: false,

      resetMessage: "",
      resetRequest: false,
      resetFailed: false,
      resetSuccess: false,

      registerFailed: true,
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
    });
  });

  it("GET_REGISTER_SUCCES", () => {
    expect(
      auth(undefined, {
        type: GET_REGISTER_SUCCESS,
        payload: { name: "name", email: "email@gmail.ru" },
      })
    ).toEqual({
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
      registerSuccess: true,
      user: {
        name: "name",
        email: "email@gmail.ru",
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
    });
  });

  it("AUTH_REQUEST", () => {
    expect(
      auth(undefined, {
        type: AUTH_REQUEST,
      })
    ).toEqual({
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
      authRequest: true,
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
    });
  });

  it("AUTH_FAILED", () => {
    expect(
      auth(undefined, {
        type: AUTH_FAILED,
      })
    ).toEqual({
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
      authError: true,
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
    });
  });

  it("AUTH_SUCCESS", () => {
    expect(
      auth(undefined, {
        type: AUTH_SUCCESS,
        payload: { name: "name", email: "email@gmail.ru" },
      })
    ).toEqual({
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
      user: { name: "name", email: "email@gmail.ru" },

      authRequest: false,
      authError: false,
      isAuth: true,

      logoutRequest: false,
      logoutSuccess: false,
      logoutFailed: false,

      getUserRequest: false,
      getUserFailed: false,
      getUserSuccess: false,

      changeUserRequest: false,
      changeUserSuccess: false,
      changeUserFailed: false,
    });
  });

  it("LOGOUT_REQUEST", () => {
    expect(auth(undefined, { type: LOGOUT_REQUEST })).toEqual({
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

      logoutRequest: true,
      logoutSuccess: false,
      logoutFailed: false,

      getUserRequest: false,
      getUserFailed: false,
      getUserSuccess: false,

      changeUserRequest: false,
      changeUserSuccess: false,
      changeUserFailed: false,
    });
  });

  it("LOGOUT_FAILED", () => {
    expect(auth(undefined, { type: LOGOUT_FAILED })).toEqual({
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
      logoutFailed: true,

      getUserRequest: false,
      getUserFailed: false,
      getUserSuccess: false,

      changeUserRequest: false,
      changeUserSuccess: false,
      changeUserFailed: false,
    });
  });

  it("LOGOUT_SUCCESS", () => {
    expect(auth(undefined, { type: LOGOUT_SUCCESS })).toEqual({
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
    });
  });

  it("GET_USER_REQUEST", () => {
    expect(auth(undefined, { type: GET_USER_REQUEST })).toEqual({
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

      getUserRequest: true,
      getUserFailed: false,
      getUserSuccess: false,

      changeUserRequest: false,
      changeUserSuccess: false,
      changeUserFailed: false,
    });
  });

  it("GET_USER_FAILED", () => {
    expect(auth(undefined, { type: GET_USER_FAILED })).toEqual({
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
      getUserFailed: true,
      getUserSuccess: false,

      changeUserRequest: false,
      changeUserSuccess: false,
      changeUserFailed: false,
    });
  });

  it("GET_USER_SUCCESS", () => {
    expect(
      auth(undefined, {
        type: GET_USER_SUCCESS,
        payload: { name: "name", email: "email@gmail.ru" },
      })
    ).toEqual({
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
      user: { name: "name", email: "email@gmail.ru" },
      authRequest: false,
      authError: false,
      isAuth: false,

      logoutRequest: false,
      logoutSuccess: false,
      logoutFailed: false,

      getUserRequest: false,
      getUserFailed: false,
      getUserSuccess: true,

      changeUserRequest: false,
      changeUserSuccess: false,
      changeUserFailed: false,
    });
  });

  it("CHANGE_USER_REQUEST", () => {
    expect(auth(undefined, { type: CHANGE_USER_REQUEST })).toEqual({
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

      changeUserRequest: true,
      changeUserSuccess: false,
      changeUserFailed: false,
    });
  });

  it("CHANGE_USER_FAILED", () => {
    expect(auth(undefined, { type: CHANGE_USER_FAILED })).toEqual({
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
      changeUserFailed: true,
    });
  });

  it("CHANGE_USER_SUCCESS", () => {
    expect(
      auth(undefined, {
        type: CHANGE_USER_SUCCESS,
        payload: { name: "name", email: "email@gmail.ru" },
      })
    ).toEqual({
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
      user: { name: "name", email: "email@gmail.ru" },
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
      changeUserSuccess: true,
      changeUserFailed: false,
    });
  });
});
