import { TAuth } from "../services/actions/auth";
import { TBurgerConstructor } from "../services/actions/burger-constructor";
import { TBurgerIngredients } from "../services/actions/burger-ingredients";
import { TOrderDetails } from "../services/actions/order-details";
import { store } from "../services/store";
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator, Dispatch } from "redux";

export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions =
  | TAuth
  | TBurgerConstructor
  | TBurgerIngredients
  | TOrderDetails;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;

export interface IngredientItemType {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  key: number;
}

export interface IngredientType {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export interface OrdersType {
  _id: string;
  ingredients: Array<string>;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}

export interface Message {
  _id: string;
  ingredients: Array<string>;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}
