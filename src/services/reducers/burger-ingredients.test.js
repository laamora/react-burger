import { GET_DATA, SET_ERROR } from "../actions/burger-ingredients";

import { burgerIngredients } from "./burger-ingredients";

describe("burgerIngredients reducer", () => {
  it("burgerIngredients reducer initial state", () => {
    expect(burgerIngredients(undefined, {})).toEqual({
      ingredients: [],
      error: "",
    });
  });

  it("GET_DATA", () => {
    expect(
      burgerIngredients(undefined, {
        type: GET_DATA,
        payload: {
          data: [
            {
              _id: "60d3b41abdacab0026a733c6",
              name: "Краторная булка N-200i",
              type: "bun",
              proteins: 80,
              fat: 24,
              carbohydrates: 53,
              calories: 420,
              price: 1255,
            },
          ],
        },
      })
    ).toEqual({
      ingredients: [
        {
          _id: "60d3b41abdacab0026a733c6",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
        },
      ],
      error: "",
    });
  });

  it("SET_ERROR", () => {
    expect(
      burgerIngredients(undefined, {
        type: SET_ERROR,
        payload: "error",
      })
    ).toEqual({
      ingredients: [],
      error: "error",
    });
  });
});
