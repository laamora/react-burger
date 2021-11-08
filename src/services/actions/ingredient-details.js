export const SET_DETAILS = "SET_DETAILS";
export const REMOVE_DETAILS = "REMOVE_DETAILS";

export const setDetails = (payload) => {
  // eslint-disable-next-line
  return {
    // eslint-disable-next-line
    type: SET_DETAILS,
    payload,
  };
};

export const removeDetails = () => {
  // eslint-disable-next-line
  return {
    // eslint-disable-next-line
    type: REMOVE_DETAILS,
  };
};
