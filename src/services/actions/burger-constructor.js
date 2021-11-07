export const SET_INGREDIENT = "SET_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const SET_BUN = "SET_BUN";

export const setIngredient = (payload) => {
  console.log(payload);
  return {
    type: SET_INGREDIENT,
    payload,
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
