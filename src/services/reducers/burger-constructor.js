import {
  SET_INGREDIENT,
  SET_BUN,
  DELETE_INGREDIENT,
} from "../actions/burger-constructor";

const defaultState = {
  ingredients: [],
  bun: null,
};

export const burgerConstructor = (state = defaultState, action) => {
  switch (action.type) {
    case SET_INGREDIENT:
      console.log(state.ingredients);
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: [
          state.ingredients.filter((item) => item._id !== action.payload),
        ],
      };
    case SET_BUN:
      return { ...state, bun: action.payload };
    default:
      return state;
  }
};
