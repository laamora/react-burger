import { orderDetails } from "./order-details";
import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  REMOVE_ORDER,
} from "../actions/order-details";

describe("order reducer", () => {
  it("order reducer initial state", () => {
    expect(orderDetails(undefined, {})).toEqual({
      orderNumber: null,
      orderRequest: false,
      orderFailed: false,
      orderSuccess: false,
    });
  });

  it("GET_ORDER_REQUEST", () => {
    expect(orderDetails(undefined, { type: GET_ORDER_REQUEST })).toEqual({
      orderNumber: null,
      orderRequest: true,
      orderFailed: false,
      orderSuccess: false,
    });
  });

  it("GET_ORDER_SUCCESS", () => {
    expect(
      orderDetails(undefined, { type: GET_ORDER_SUCCESS, payload: 1000 })
    ).toEqual({
      orderSuccess: true,
      orderNumber: 1000,
      orderRequest: false,
      orderFailed: false,
    });
  });

  it("GET_ORDER_FAILED", () => {
    expect(orderDetails(undefined, { type: GET_ORDER_FAILED })).toEqual({
      orderNumber: null,
      orderRequest: false,
      orderFailed: true,
      orderSuccess: false,
    });
  });

  it("REMOVE_ORDER", () => {
    expect(orderDetails(undefined, { type: REMOVE_ORDER })).toEqual({
      orderNumber: null,
      orderRequest: false,
      orderFailed: false,
      orderSuccess: false,
    });
  });
});
