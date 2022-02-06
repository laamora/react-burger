import { IngredientType } from "../../utils/interface";
import {
  GET_DATA,
  SET_ERROR,
  TBurgerIngredients,
} from "../actions/burger-ingredients";

type TIngredients = {
  ingredients: [] | IngredientType[];
  error: string;
};

const defaultState: TIngredients = {
  ingredients: [],
  error: "",
};

export const burgerIngredients = (
  state = defaultState,
  action: TBurgerIngredients
): TIngredients => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, ingredients: action.payload.data };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
