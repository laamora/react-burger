import { PRODUCT_URL } from "../../utils/constants";

export const GET_DATA = "GET_DATA";
export const SET_ERROR = "SET_ERROR";

export const setError = (payload) => {
  // eslint-disable-next-line
  return {
    // eslint-disable-next-line
    type: SET_ERROR,
    payload,
  };
};

export const getData = (payload) => {
  // eslint-disable-next-line
  return {
    // eslint-disable-next-line
    type: GET_DATA,
    payload,
  };
};

export const fetchData = () => {
  return function (dispatch) {
    fetch(PRODUCT_URL)
      .then((res) => res.json())
      .then((data) => dispatch(getData(data)))
      .catch((e) => {
        dispatch(setError(e));
        console.log(e);
      });
  };
};
