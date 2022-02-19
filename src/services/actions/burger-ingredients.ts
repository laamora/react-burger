import { MAIN_API } from "../../utils/constants";
import {
  AppDispatch,
  AppThunk,
  IngredientItemType,
} from "../../utils/interface";

export const GET_DATA: "GET_DATA" = "GET_DATA";
export const SET_ERROR: "SET_ERROR" = "SET_ERROR";

export interface IGetData {
  readonly type: typeof GET_DATA;
  readonly payload: { data: IngredientItemType[] };
}

export interface ISetError {
  readonly type: typeof SET_ERROR;
  readonly payload: any;
}

export type TBurgerIngredients = IGetData | ISetError;

export const setError = (payload: string) => {
  // eslint-disable-next-line
  return {
    // eslint-disable-next-line
    type: SET_ERROR,
    payload,
  };
};

export const getData = (payload: { data: IngredientItemType[] }) => {
  // eslint-disable-next-line
  return {
    // eslint-disable-next-line
    type: GET_DATA,
    payload,
  };
};

export const fetchData: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    fetch(`${MAIN_API}/ingredients`)
      .then((res) => res.json())
      .then((data) => dispatch(getData(data)))
      .catch((e) => {
        dispatch(setError(e));
      });
  };
};
