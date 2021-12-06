import { MAIN_API } from "../../utils/constants";

export const GET_FORGOT_REQUEST = "GET_FORGOT_REQUEST";
export const GET_FORGOT_FAILED = "GET_FORGOT_FAILED";
export const GET_FORGOT_SUCCESS = "GET_FORGOT_SUCCESS";

export const GET_RESET_REQUEST = "GET_RESET_REQUEST";
export const GET_RESET_FAILED = "GET_RESET_FAILED";
export const GET_RESET_SUCCESS = "GET_RESET_SUCCESS";

export const GET_REGISTER_REQUEST = "GET_REGISTER_REQUEST";
export const GET_REGISTER_FAILED = "GET_REGISTER_REQUEST";
export const GET_REGISTER_SUCCESS = "GET_REGISTER_REQUEST";

export const AUTH_REQUEST = "AUTH_REQUEST";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILED = "AUTH_FAILED";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const CHANGE_USER_REQUEST = "CHANGE_USER_REQUEST";
export const CHANGE_USER_SUCCESS = "CHANGE_USER_SUCCESS";
export const CHANGE_USER_FAILED = "CHANGE_USER_FAILED";

// password part
export const forgotPassword = (value) => {
  return (dispatch) => {
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

export const resetPassword = (value) => {
  return (dispatch) => {
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
export const register = (value, history) => {
  console.log(value);
  return (dispatch) => {
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
      .catch(() => dispatch({ type: GET_REGISTER_FAILED }));
  };
};

export const login = ({ email, password, history }) => {
  return (dispatch) => {
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

export function logout(history) {
  return function (dispatch) {
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
}

// token part
const checkRes = (res) => {
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

export const retriableFetch = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);
    const result = await checkRes(res);
    return result; // или можно сделать return await; главное дождаться промиса, чтоб catch сработал при ошибке
  } catch (err) {
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

export function getUserData() {
  return function (dispatch) {
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
}

export function changeUserData(object) {
  return function (dispatch) {
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
}
