import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { burgerIngredients } from "./reducers/burger-ingredients";
import { burgerConstructor } from "./reducers/burger-constructor";
import { orderDetails } from "./reducers/order-details";
import { auth } from "./reducers/auth";
import { socketMiddleware, WsActions } from "./middleware/socketMiddleware";
import { WS_URL } from "../utils/constants";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_START_ALL,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "./actions/wsAction";
import { wsReducer } from "./reducers/wsReducer";

const wsAction: WsActions = {
  wsInit: WS_CONNECTION_START,
  wsInitAll: WS_CONNECTION_START_ALL,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const rootReducer = combineReducers({
  ingredients: burgerIngredients,
  constructors: burgerConstructor,
  order: orderDetails,
  auth: auth,
  ws: wsReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, socketMiddleware(WS_URL, wsAction)))
);
