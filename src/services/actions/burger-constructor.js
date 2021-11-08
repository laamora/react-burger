export const SET_INGREDIENT = "SET_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const SET_BUN = "SET_BUN";
export const MOVE_INGREDIENTS = "MOVE_INGREDIENTS";

export const setIngredient = (item) => {
  item.key = Date.now() + Math.random();
  return {
    type: SET_INGREDIENT,
    payload: item,
  };
};

export const deleteIngredient = (payload) => {
  return {
    type: DELETE_INGREDIENT,
    payload,
  };
};

export const setBun = (payload) => {
  return {
    type: SET_BUN,
    payload,
  };
};

export const moveIngredients = (dragIndex, hoverIndex) => {
  return {
    type: MOVE_INGREDIENTS,
    payload: { dragIndex, hoverIndex },
  };
};
