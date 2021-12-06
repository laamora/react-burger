import {
  SET_DETAILS,
  REMOVE_DETAILS,
  SHOW_DETAILS,
  CLOSE_DETAILS,
} from "../actions/ingredient-details";

const defaultState = {
  details: null,
  show: false,
};

export const ingredientDetails = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return { ...state, details: action.payload };
    case REMOVE_DETAILS:
      return { ...state, details: null };
    case SHOW_DETAILS:
      return { ...state, show: true };
    case CLOSE_DETAILS:
      return { ...state, show: false };
    default:
      return state;
  }
};
