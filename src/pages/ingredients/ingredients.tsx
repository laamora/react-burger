import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RooteReducer } from "../../services/reducers/interface";
import { IngredientItemType } from "../../utils/interface";
import style from "./ingredients.module.css";

const Ingredients = () => {
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
        <div className={style.background}>
          <div className={style.cart}>
            <div className={style.container}>
              <div className={style.button_container}>
                <p className="text text_type_main-large">Детали ингридиента</p>
              </div>
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
                    <p className="text text_type_digits-default text_color_inactive">
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
                    <p className="text text_type_digits-default text_color_inactive">
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
                    <p className="text text_type_digits-default text_color_inactive">
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
                    <p className="text text_type_digits-default text_color_inactive">
                      {ingredient.carbohydrates}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Ingredients;
