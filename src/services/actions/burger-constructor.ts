import { IngredientItemType } from "../../utils/interface";

export const SET_INGREDIENT: "SET_INGREDIENT" = "SET_INGREDIENT";
export const DELETE_INGREDIENT: "DELETE_INGREDIENT" = "DELETE_INGREDIENT";
export const SET_BUN: "SET_BUN" = "SET_BUN";
export const MOVE_INGREDIENTS: "MOVE_INGREDIENTS" = "MOVE_INGREDIENTS";
export const CLEAR: "CLEAR" = "CLEAR";

export interface ISetIngredient {
  readonly type: typeof SET_INGREDIENT;
  readonly payload: IngredientItemType;
}
export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: number;
}
export interface ISetBun {
  readonly type: typeof SET_BUN;
  readonly payload: IngredientItemType;
}
export interface IMoveIngredients {
  readonly type: typeof MOVE_INGREDIENTS;
  readonly payload: { dragIndex: number; hoverIndex: number };
}
export interface IClear {
  readonly type: typeof CLEAR;
}

export type TBurgerConstructor =
  | ISetIngredient
  | IDeleteIngredient
  | ISetBun
  | IMoveIngredients
  | IClear;

export const setIngredient = (item: IngredientItemType) => {
  item.key = Date.now() + Math.random();
  return {
    type: SET_INGREDIENT,
    payload: item,
  };
};

export const deleteIngredient = (payload: number) => {
  return {
    type: DELETE_INGREDIENT,
    payload,
  };
};

export const setBun = (payload: IngredientItemType) => {
  return {
    type: SET_BUN,
    payload,
  };
};

export const moveIngredients = (dragIndex: number, hoverIndex: number) => {
  return {
    type: MOVE_INGREDIENTS,
    payload: { dragIndex, hoverIndex },
  };
};

export const clearAll = () => {
  return {
    type: CLEAR,
  };
};
