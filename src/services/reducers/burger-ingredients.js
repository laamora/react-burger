import { GET_DATA, SET_ERROR } from "../actions/burger-ingredients";

const defaultState = {
  ingredients: [],
  error: "",
};

export const burgerIngredients = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, ingredients: action.payload.data };
    case SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
