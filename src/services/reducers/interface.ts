interface Ingredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  key: any;
}

interface Ingredients {
  ingredients: Ingredient[];
  error: string;
}

interface Constructor {
  ingredients: Ingredient[];
  bun: null | Ingredient;
  count: number;
}

interface Order {
  orderNumber: null | string | number;
  orderRequest: boolean;
  orderFailed: boolean;
  orderSuccess: boolean;
}

export interface RooteReducer {
  ingredients: Ingredients;
  constructors: Constructor;
  details: any;
  order: Order;
  auth: any;
}
