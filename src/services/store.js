import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { burgerIngredients } from "./reducers/burger-ingredients";
import { burgerConstructor } from "./reducers/burger-constructor";
import { ingredientDetails } from "./reducers/ingredient-details";
import { orderDetails } from "./reducers/order-details";

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

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
