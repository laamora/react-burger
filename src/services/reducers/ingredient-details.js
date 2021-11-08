import { SET_DETAILS, REMOVE_DETAILS } from "../actions/ingredient-details";

const defaultState = {
  details: null,
};

export const ingredientDetails = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return { details: action.payload };
    case REMOVE_DETAILS:
      return { details: null };
    default:
      return state;
  }
};
