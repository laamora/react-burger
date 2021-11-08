import {
  SET_INGREDIENT,
  SET_BUN,
  DELETE_INGREDIENT,
  MOVE_INGREDIENTS,
} from "../actions/burger-constructor";

const defaultState = {
  ingredients: [],
  bun: null,
};

export const burgerConstructor = (state = defaultState, action) => {
  switch (action.type) {
    case SET_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (item) => item.key !== action.payload
        ),
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
      return { ...state, bun: action.payload };
    default:
      return state;
  }
};
