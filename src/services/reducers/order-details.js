import { POST, REMOVE_DETAILS } from "../actions/order-details";

const defaultState = {
  number: null,
};

export const orderDetails = (state = defaultState, action) => {
  switch (action.type) {
    case POST:
      return { details: action.payload };
    case REMOVE_DETAILS:
      return { details: null };
    default:
      return state;
  }
};
