import React from "react";
import style from "./ingredient_details.module.css";
import { dataItem } from "../../../../utils/types";
import Modal from "../../../modal/modal";
import PropTypes from "prop-types";

const IngredientDetails = ({ show, item }) => {
  const onKeyPressHandler = (e) => {
    if (e.keyCode === 27) {
      show(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyPressHandler, false);
    return () => {
      document.removeEventListener("keydown", onKeyPressHandler, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Modal show={show} header={"Детали ингридиента"}>
      <img src={item.image_large} alt={item.name} className="" />
      <div className={style.text_container}>
        <p className="text text_type_main-medium">{item.name}</p>
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
              {item.calories}
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
              {item.proteins}
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
              {item.fat}
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
              {item.carbohydrates}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default IngredientDetails;

IngredientDetails.propTypes = {
  item: dataItem,
  show: PropTypes.func.isRequired,
};
