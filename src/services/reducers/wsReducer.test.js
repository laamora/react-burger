import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../actions/wsAction";
import { wsReducer } from "./wsReducer";

describe("orders reducer", () => {
  it("orders reducer initial state", () => {
    expect(wsReducer(undefined, {})).toEqual({
      wsConnected: false,
      messages: [],
      total: 0,
      totalToday: 0,
      error: null,
    });
  });

  it("WS_CONNECTION_CLOSED", () => {
    expect(wsReducer(undefined, { type: WS_CONNECTION_CLOSED })).toEqual({
      wsConnected: false,
      messages: [],
      total: 0,
      totalToday: 0,
      error: undefined,
    });
  });

  it("WS_CONNECTION_ERROR", () => {
    expect(
      wsReducer(undefined, { type: WS_CONNECTION_ERROR, payload: "error" })
    ).toEqual({
      wsConnected: false,
      messages: [],
      total: 0,
      totalToday: 0,
      error: "error",
    });
  });

  it("WS_CONNECTION_SUCCESS", () => {
    expect(wsReducer(undefined, { type: WS_CONNECTION_SUCCESS })).toEqual({
      wsConnected: true,
      messages: [],
      total: 0,
      totalToday: 0,
      error: undefined,
    });
  });

  it("WS_GET_MESSAGE", () => {
    expect(
      wsReducer(undefined, {
        type: WS_GET_MESSAGE,
        payload: {
          total: 1000,
          totalToday: 2000,
          orders: [
            { id: 1, name: "Burger" },
            { id: 2, name: "Stellar" },
          ],
        },
      })
    ).toEqual({
      wsConnected: false,
      messages: [
        { id: 1, name: "Burger" },
        { id: 2, name: "Stellar" },
      ],
      total: 1000,
      totalToday: 2000,
      error: undefined,
    });
  });
});
