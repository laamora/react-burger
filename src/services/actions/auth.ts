import { MAIN_API } from "../../utils/constants";
import { AppDispatch, AppThunk } from "../../utils/interface";

export const GET_FORGOT_REQUEST: "GET_FORGOT_REQUEST" = "GET_FORGOT_REQUEST";
export const GET_FORGOT_FAILED: "GET_FORGOT_FAILED" = "GET_FORGOT_FAILED";
export const GET_FORGOT_SUCCESS = "GET_FORGOT_SUCCESS";

export const GET_RESET_REQUEST: "GET_RESET_REQUEST" = "GET_RESET_REQUEST";
export const GET_RESET_FAILED: "GET_RESET_FAILED" = "GET_RESET_FAILED";
export const GET_RESET_SUCCESS: "GET_RESET_SUCCESS" = "GET_RESET_SUCCESS";

export const GET_REGISTER_REQUEST: "GET_REGISTER_REQUEST" =
  "GET_REGISTER_REQUEST";
export const GET_REGISTER_FAILED: "GET_REGISTER_FAILED" = "GET_REGISTER_FAILED";
export const GET_REGISTER_SUCCESS: "GET_REGISTER_SUCCESS" =
  "GET_REGISTER_SUCCESS";

export const AUTH_REQUEST: "AUTH_REQUEST" = "AUTH_REQUEST";
export const AUTH_SUCCESS: "AUTH_SUCCESS" = "AUTH_SUCCESS";
export const AUTH_FAILED: "AUTH_FAILED" = "AUTH_FAILED";

export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED";

export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_SUCCESS: "GET_USER_SUCCESS" = "GET_USER_SUCCESS";
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED";

export const CHANGE_USER_REQUEST: "CHANGE_USER_REQUEST" = "CHANGE_USER_REQUEST";
export const CHANGE_USER_SUCCESS: "CHANGE_USER_SUCCESS" = "CHANGE_USER_SUCCESS";
export const CHANGE_USER_FAILED: "CHANGE_USER_FAILED" = "CHANGE_USER_FAILED";

export interface IGetForgotRequest {
  readonly type: typeof GET_FORGOT_REQUEST;
}
export interface IGetForgotFailed {
  readonly type: typeof GET_FORGOT_FAILED;
}
export interface IGetForgotSucces {
  readonly type: typeof GET_FORGOT_SUCCESS;
  readonly payload: any;
}

export interface IGetResetRequest {
  readonly type: typeof GET_RESET_REQUEST;
}
export interface IGetResetFailed {
  readonly type: typeof GET_RESET_FAILED;
}
export interface IGetResetSucces {
  readonly type: typeof GET_RESET_SUCCESS;
  readonly payload: any;
}

export interface IGetRegisterRequest {
  readonly type: typeof GET_REGISTER_REQUEST;
}
export interface IGetRegisterFailed {
  readonly type: typeof GET_REGISTER_FAILED;
}
export interface IGetRegisterSucces {
  readonly type: typeof GET_REGISTER_SUCCESS;
  readonly payload: any;
}

export interface IAuthRequest {
  readonly type: typeof AUTH_REQUEST;
}
export interface IAuthFailed {
  readonly type: typeof AUTH_FAILED;
}
export interface IAuthSucces {
  readonly type: typeof AUTH_SUCCESS;
  readonly payload: any;
}

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}
export interface ILogoutFailed {
  readonly type: typeof LOGOUT_FAILED;
}
export interface ILogoutSucces {
  readonly type: typeof LOGOUT_SUCCESS;
}

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}
export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED;
}
export interface IGetUserSucces {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: any;
}

export interface IChangeUserRequest {
  readonly type: typeof CHANGE_USER_REQUEST;
}
export interface IChangeUserFailed {
  readonly type: typeof CHANGE_USER_FAILED;
}
export interface IChangeUserSucces {
  readonly type: typeof CHANGE_USER_SUCCESS;
  readonly payload: any;
}

export type TAuth =
  | IGetForgotRequest
  | IGetForgotFailed
  | IGetForgotSucces
  | IGetResetRequest
  | IGetResetFailed
  | IGetResetSucces
  | IGetRegisterRequest
  | IGetRegisterFailed
  | IGetRegisterSucces
  | IAuthRequest
  | IAuthFailed
  | IAuthSucces
  | ILogoutRequest
  | ILogoutFailed
  | ILogoutSucces
  | IGetUserRequest
  | IGetUserFailed
  | IGetUserSucces
  | IChangeUserRequest
  | IChangeUserFailed
  | IChangeUserSucces;

// password part
export const forgotPassword: AppThunk = (value: string) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_FORGOT_REQUEST,
    });
    fetch(`${MAIN_API}/password-reset`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: value }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else dispatch({ type: GET_FORGOT_FAILED });
      })
      .then((res) => dispatch({ type: GET_FORGOT_SUCCESS, payload: res }))
      .catch(() => dispatch({ type: GET_FORGOT_FAILED }));
  };
};

export const resetPassword: AppThunk = (value: {
  password: string;
  token: string;
}) => {
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_RESET_REQUEST,
    });
    fetch(`${MAIN_API}/password-reset/reset`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ password: value.password, token: value.token }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else dispatch({ type: GET_RESET_FAILED });
      })
      .then((res) => {
        dispatch({ type: GET_RESET_SUCCESS, payload: res });
      })
      .catch(() => dispatch({ type: GET_RESET_FAILED }));
  };
};

// user part
export const register: AppThunk = (
  value: { email: string; password: string; name: string },
  history: any
) => {
  console.log(value);
  return (dispatch: AppDispatch) => {
    dispatch({
      type: GET_REGISTER_REQUEST,
    });
    fetch(`${MAIN_API}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: value.email,
        password: value.password,
        name: value.name,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else dispatch({ type: GET_REGISTER_FAILED });
      })
      .then((res) => {
        dispatch({ type: GET_REGISTER_SUCCESS, payload: res });
        localStorage.setItem("accessToken", res.accessToken);
        localStorage.setItem("refreshToken", res.refreshToken);
        history.push("/");
      })
      .catch(() => dispatch({ type: GET_REGISTER_FAILED, payload: "" }));
  };
};

export const login: AppThunk = ({
  email,
  password,
  history,
}: {
  email: string;
  password: string;
  history: any;
}) => {
  return (dispatch: AppDispatch) => {
    dispatch({ type: AUTH_REQUEST });
    fetch(`${MAIN_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else return res.json().then((err) => Promise.reject(err));
      })
      .then((res) => {
        if (res.success) {
          localStorage.setItem("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          dispatch({ type: AUTH_SUCCESS, payload: res.user });
          history.push("/");
        } else Promise.reject(res);
      })
      .catch(() => dispatch({ type: AUTH_FAILED }));
  };
};

export const logout: AppThunk = (history: any) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_REQUEST,
    });
    fetch(`${MAIN_API}/auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    })
      .then(async (res) => {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
        if (res && res.ok) {
          dispatch({
            type: LOGOUT_SUCCESS,
          });
          history.replace("/login");
        } else {
          dispatch({
            type: LOGOUT_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: LOGOUT_FAILED,
        });
      });
  };
};

// token part
const checkRes = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const refreshToken = () => {
  return fetch(`${MAIN_API}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkRes);
};

export const retriableFetch = async (url: string, options = {}) => {
  try {
    const res = await fetch(url, options);
    const result = await checkRes(res);
    return result; // или можно сделать return await; главное дождаться промиса, чтоб catch сработал при ошибке
  } catch (err: any) {
    // сначала убеждаемся, что это не любая ошибка, а нужно токен обновить
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken(); // обновляем токен; пытаемся 1 раз, если не сложилось -- падаем с ошибкой
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);
      // if (options.headers) {
      //     options.headers = {}
      // }
      // // если в переданных опциях не было хедеров, добавляем в options пустой объект по ключу headers
      // options.headers.authorization = `Bearer ${refreshData.accessToken}`;
      const res = await fetch(url, options); // повторяем оригинальный запрос с оригинальными options (+ дополнительным хедером)
      return await checkRes(res); // если все равно проваливаемся -- значит не судьба :/
    } else {
      throw err;
    }
  }
};

export const getUserData: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
    retriableFetch(`${MAIN_API}/auth/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("accessToken")}`,
      },
    })
      .then((result) => {
        dispatch({
          type: GET_USER_SUCCESS,
          payload: result.user,
        });
      })
      .catch(() => {
        dispatch({
          type: GET_USER_FAILED,
        });
      });
  };
};

export const changeUserData: AppThunk = (object: {
  name: string;
  email: string;
  password?: string | undefined | null;
}) => {
  return function (dispatch: AppDispatch) {
    let obj = {};
    if (!object.password) {
      obj = {
        name: object.name,
        email: object.email,
      };
    } else {
      obj = {
        name: object.name,
        email: object.email,
        password: object.password,
      };
    }
    console.log(obj);
    dispatch({
      type: CHANGE_USER_REQUEST,
    });
    retriableFetch(`${MAIN_API}/auth/user`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(obj),
    })
      .then(async (res) => {
        if (res && res.ok) {
          const data = await res.json();
          dispatch({
            type: CHANGE_USER_SUCCESS,
            payload: data.user,
          });
        } else {
          dispatch({
            type: CHANGE_USER_FAILED,
          });
        }
      })
      .catch(() => {
        dispatch({
          type: CHANGE_USER_FAILED,
        });
      });
  };
};
