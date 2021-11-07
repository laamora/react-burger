import { SET_DETAILS, REMOVE_DETAILS } from "../actions/order-details";

const defaultState = {
  details: {},
};

export const burgerIngredients = (state = defaultState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return { details: action.payload };
    case REMOVE_DETAILS:
      return { details: {} };
    default:
      return state;
  }
};
