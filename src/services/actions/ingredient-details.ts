import { IngredientItemType } from "../../utils/interface";

export const SET_DETAILS: "SET_DETAILS" = "SET_DETAILS";
export const REMOVE_DETAILS: "REMOVE_DETAILS" = "REMOVE_DETAILS";
export const SHOW_DETAILS: "SHOW_DETAILS" = "SHOW_DETAILS";
export const CLOSE_DETAILS: "CLOSE_DETAILS" = "CLOSE_DETAILS";

export interface ISetDetails {
  readonly type: typeof SET_DETAILS;
  readonly payload: IngredientItemType;
}
export interface IRemoveDetails {
  readonly type: typeof REMOVE_DETAILS;
}
export interface IShowDetails {
  readonly type: typeof SHOW_DETAILS;
}
export interface ICloseDetails {
  readonly type: typeof CLOSE_DETAILS;
}
export type TIngredientDetails =
  | ISetDetails
  | IRemoveDetails
  | IShowDetails
  | ICloseDetails;

export const setDetails = (payload: IngredientItemType) => {
  // eslint-disable-next-line
  return {
    // eslint-disable-next-line
    type: SET_DETAILS,
    payload,
  };
};

export const removeDetails = () => {
  // eslint-disable-next-line
  return {
    // eslint-disable-next-line
    type: REMOVE_DETAILS,
  };
};
