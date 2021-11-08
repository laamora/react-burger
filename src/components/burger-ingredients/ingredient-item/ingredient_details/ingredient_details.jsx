import React from "react";
import style from "./ingredient_details.module.css";
import Modal from "../../../modal/modal";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { removeDetails } from "../../../../services/actions/ingredient-details";

const IngredientDetails = ({ show }) => {
  const dispatch = useDispatch();
  const onKeyPressHandler = (e) => {
    if (e.keyCode === 27) {
      show(false);
      dispatch(removeDetails());
    }
  };

  const ingredient = useSelector((state) => state.details.details);
  React.useEffect(() => {
    document.addEventListener("keydown", onKeyPressHandler, false);
    return () => {
      document.removeEventListener("keydown", onKeyPressHandler, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Modal show={show} header={"Детали ингридиента"}>
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
  show: PropTypes.func.isRequired,
};
