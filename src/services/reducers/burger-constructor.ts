import { IngredientItemType } from "../../utils/interface";
import {
  SET_INGREDIENT,
  SET_BUN,
  DELETE_INGREDIENT,
  MOVE_INGREDIENTS,
  CLEAR,
  TBurgerConstructor,
} from "../actions/burger-constructor";

type TConstructorState = {
  ingredients: [] | IngredientItemType[];
  bun: null | IngredientItemType;
  count: number;
};

const defaultState: TConstructorState = {
  ingredients: [],
  bun: null,
  count: 0,
};

export const burgerConstructor = (
  state = defaultState,
  action: TBurgerConstructor
): TConstructorState => {
  switch (action.type) {
    case SET_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
        count: state.count + 1,
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.key !== action.payload
        ),
        count: state.count - 1,
      };
    case MOVE_INGREDIENTS: {
      const newIngredients = [...state.ingredients];
      newIngredients.splice(
        action.payload.hoverIndex,
        0,
        newIngredients.splice(action.payload.dragIndex, 1)[0]
      );
      return {
        ...state,
        ingredients: newIngredients,
      };
    }
    case SET_BUN:
      let a = 0;
      if (state.bun === null) {
        a = 2;
      } else {
        a = 0;
      }
      return { ...state, bun: action.payload, count: state.count + a };
    case CLEAR:
      return { ...state, ingredients: [], count: 0, bun: null };
    default:
      return state;
  }
};
