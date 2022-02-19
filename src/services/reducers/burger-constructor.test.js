import {
  SET_INGREDIENT,
  SET_BUN,
  DELETE_INGREDIENT,
  MOVE_INGREDIENTS,
  CLEAR,
} from "../actions/burger-constructor";

import { burgerConstructor } from "./burger-constructor";

describe("burgerConstructor reducer", () => {
  it("burgerConstructor reducer initial state", () => {
    expect(burgerConstructor(undefined, {})).toEqual({
      ingredients: [],
      bun: null,
      count: 0,
    });
  });

  it("SET_INGREDIENT", () => {
    expect(
      burgerConstructor(undefined, {
        type: SET_INGREDIENT,
        payload: {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
          key: 15,
        },
      })
    ).toEqual({
      ingredients: [
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
          key: 15,
        },
      ],
      bun: null,
      count: 1,
    });
  });

  it("SET_BUN", () => {
    expect(
      burgerConstructor(undefined, {
        type: SET_BUN,
        payload: {
          _id: "60666c42cc7b410027a1a9b1",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          __v: 0,
          key: 20,
        },
      })
    ).toEqual({
      ingredients: [],
      bun: {
        _id: "60666c42cc7b410027a1a9b1",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
        key: 20,
      },
      count: 2,
    });
  });

  it("CLEAR", () => {
    expect(
      burgerConstructor(undefined, {
        type: CLEAR,
      })
    ).toEqual({
      ingredients: [],
      count: 0,
      bun: null,
    });
  });

  it("DELETE_INGREDIENT", () => {
    expect(
      burgerConstructor(
        {
          ingredients: [
            {
              _id: "60666c42cc7b410027a1a9b5",
              name: "Говяжий метеорит (отбивная)",
              type: "main",
              proteins: 800,
              fat: 800,
              carbohydrates: 300,
              calories: 2674,
              price: 3000,
              image: "https://code.s3.yandex.net/react/code/meat-04.png",
              image_mobile:
                "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
              image_large:
                "https://code.s3.yandex.net/react/code/meat-04-large.png",
              __v: 0,
              key: 15,
            },
          ],
          count: 1,
          bun: null,
        },
        {
          type: DELETE_INGREDIENT,
          payload: 15,
        }
      )
    ).toEqual({
      ingredients: [],
      count: 0,
      bun: null,
    });
  });

  it("MOVE_INGREDIENTS", () => {
    expect(
      burgerConstructor(
        {
          ingredients: [
            {
              id: "1",
              name: "Соус фирменный Space Sauce",
              type: "sauce",
              price: 1000,
              key: "1",
            },
            {
              id: "2",
              name: "Соус фирменный Space Sauce",
              type: "sauce",
              price: 1000,
              key: "2",
            },
          ],
          bun: null,
          count: 2,
        },
        {
          type: MOVE_INGREDIENTS,
          payload: { hoverIndex: 0, dragIndex: 1 },
        }
      )
    ).toEqual({
      ingredients: [
        {
          id: "2",
          name: "Соус фирменный Space Sauce",
          type: "sauce",
          price: 1000,
          key: "2",
        },
        {
          id: "1",
          name: "Соус фирменный Space Sauce",
          type: "sauce",
          price: 1000,
          key: "1",
        },
      ],
      count: 2,
      bun: null,
    });
  });
});
