import { IngredientType } from "../../utils/interface";
import {
  SET_DETAILS,
  REMOVE_DETAILS,
  SHOW_DETAILS,
  CLOSE_DETAILS,
  TIngredientDetails,
} from "../actions/ingredient-details";

type TDetails = {
  details: null | IngredientType;
  show: boolean;
};

const defaultState: TDetails = {
  details: null,
  show: false,
};

export const ingredientDetails = (
  state = defaultState,
  action: TIngredientDetails
): TDetails => {
  switch (action.type) {
    case SET_DETAILS:
      return { ...state, details: action.payload };
    case REMOVE_DETAILS:
      return { ...state, details: null };
    case SHOW_DETAILS:
      return { ...state, show: true };
    case CLOSE_DETAILS:
      return { ...state, show: false };
    default:
      return state;
  }
};
