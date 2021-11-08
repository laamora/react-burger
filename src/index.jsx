import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./components/app/app";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { burgerIngredients } from "./services/reducers/burger-ingredients";
import { burgerConstructor } from "./services/reducers/burger-constructor";
import { ingredientDetails } from "./services/reducers/ingredient-details";
import { orderDetails } from "./services/reducers/order-details";

const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const rootReducer = combineReducers({
  ingredients: burgerIngredients,
  constructors: burgerConstructor,
  details: ingredientDetails,
  order: orderDetails,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
