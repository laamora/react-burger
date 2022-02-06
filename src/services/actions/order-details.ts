import { MAIN_API } from "../../utils/constants";

export const GET_ORDER_REQUEST: "GET_ORDER_REQUEST" = "GET_ORDER_REQUEST";
export const GET_ORDER_FAILED: "GET_ORDER_FAILED" = "GET_ORDER_FAILED";
export const GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const REMOVE_ORDER: "REMOVE_ORDER" = "REMOVE_ORDER";

export interface IGetOrderRequest {
  readonly type: typeof GET_ORDER_REQUEST;
}
export interface IGetOrderFailed {
  readonly type: typeof GET_ORDER_FAILED;
}
export interface IGetOrderSucces {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: any;
}
export interface IRemoveOrder {
  readonly type: typeof REMOVE_ORDER;
}

export type TOrderDetails =
  | IGetOrderRequest
  | IGetOrderFailed
  | IGetOrderSucces
  | IRemoveOrder;

export const getNumber = (ids: string[]) => {
  return (
    dispatch: (arg0: {
      type: "GET_ORDER_REQUEST" | "GET_ORDER_FAILED" | "GET_ORDER_SUCCESS";
      payload?: any;
    }) => void
  ) => {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    fetch(`${MAIN_API}/orders`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ ingredients: ids }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        else dispatch({ type: GET_ORDER_FAILED });
      })
      .then((res) =>
        dispatch({ type: GET_ORDER_SUCCESS, payload: res.order.number })
      )
      .catch(() => dispatch({ type: GET_ORDER_FAILED }));
  };
};

export const removeOrder = () => {
  return {
    type: REMOVE_ORDER,
  };
};
