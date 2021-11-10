import React from "react";
import style from "./ingredient_details.module.css";
import Modal from "../../../modal/modal";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const IngredientDetails = ({ onClose }) => {
  const ingredient = useSelector((state) => state.details.details);
  return (
    <Modal onClose={onClose} header={"Детали ингридиента"}>
      <img src={ingredient.image_large} alt={ingredient.name} className="" />
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
    </Modal>
  );
};

export default IngredientDetails;

IngredientDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
};
