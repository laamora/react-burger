import React from "react";
import ReactDOM from "react-dom";
import style from "./ingredient_details.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");

const IngredientDetails = (props) => {
  return ReactDOM.createPortal(
    <div className={style.background}>
      <div className={style.cart}>
        <div className={style.container}>
          <div className={style.button_container}>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <CloseIcon
              type="primary"
              onClick={() => props.showDetails(false)}
            />
          </div>
          <img
            src={props.item.image_large}
            alt={props.item.name}
            className=""
          />
          <div className={style.text_container}>
            <p className="text text_type_main-medium">{props.item.name}</p>
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
                  {props.item.calories}
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
                  {props.item.proteins}
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
                  {props.item.fat}
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
                  {props.item.carbohydrates}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default IngredientDetails;
