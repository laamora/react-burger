import {
  GET_ORDER_REQUEST,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCESS,
  REMOVE_ORDER,
} from "../actions/order-details";

const defaultState = {
  orderNumber: null,
  orderRequest: false,
  orderFailed: false,
  orderSuccess: false,
};

export const orderDetails = (state = defaultState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderSuccess: true,
        orderNumber: action.payload,
        orderRequest: false,
        orderFailed: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderRequest: false,
        orderFailed: true,
      };
    }
    case REMOVE_ORDER: {
      return {
        ...state,
        orderNumber: null,
        orderRequest: false,
        orderFailed: false,
        orderSuccess: false,
      };
    }
    default: {
      return state;
    }
  }
};
