import React, { useEffect, useState } from "react";
import style from "./ingredient_details.module.css";
import Modal from "../../../modal/modal";
import { useParams } from "react-router";
import { RooteReducer } from "../../../../services/reducers/interface";
import { IngredientItemType } from "../../../../utils/interface";
import { useSelector } from "../../../../services/hooks";

interface IngredientDetailsProps {
  onClose: () => void;
}

const IngredientDetails = ({ onClose }: IngredientDetailsProps) => {
  const [ingredient, setIngredient] =
    useState<IngredientItemType | undefined>();
  const { id } = useParams<any>();
  const data = useSelector(
    (state: RooteReducer) => state.ingredients?.ingredients
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIngredient(data && data.find((item) => item._id === `${id}`));
  });
  return (
    <>
      {ingredient && (
        <Modal onClose={onClose} header={"Детали ингридиента"}>
          <img
            src={ingredient.image_large}
            alt={ingredient.name}
            className=""
          />
          <div className={style.text_container}>
            <p className="text text_type_main-medium">{ingredient.name}</p>
          </div>
          <div className={style.pfc_container}>
            <div className={style.pfc_item}>
              <div className={style.calories_text}>
                <p className="text text_type_main-default text_color_inactive">
                  Калории,ккал
                </p>
              </div>
              <div className={style.calories_text}>
                <p
                  id="calories"
                  className="text text_type_digits-default text_color_inactive"
                >
                  {ingredient.calories}
                </p>
              </div>
            </div>
            <div className={style.pfc_item}>
              <div className={style.text_pfc}>
                <p className="text text_type_main-default text_color_inactive">
                  Белки, г
                </p>
              </div>
              <div className={style.text_pfc}>
                <p
                  id="proteins"
                  className="text text_type_digits-default text_color_inactive"
                >
                  {ingredient.proteins}
                </p>
              </div>
            </div>
            <div className={style.pfc_item}>
              <div className={style.text_pfc}>
                <p className="text text_type_main-default text_color_inactive">
                  Жиры, г
                </p>
              </div>
              <div className={style.text_pfc}>
                <p
                  id="fats"
                  className="text text_type_digits-default text_color_inactive"
                >
                  {ingredient.fat}
                </p>
              </div>
            </div>
            <div className={style.pfc_item}>
              <div className={style.text_pfc}>
                <p className="text text_type_main-default text_color_inactive">
                  Углеводы, г
                </p>
              </div>
              <div className={style.text_pfc}>
                <p
                  id="carbohydrates"
                  className="text text_type_digits-default text_color_inactive"
                >
                  {ingredient.carbohydrates}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default IngredientDetails;
