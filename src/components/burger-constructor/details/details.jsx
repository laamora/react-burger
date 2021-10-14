import React from "react";
import ReactDOM from "react-dom";
import style from "./details.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import img from "../../../images/done.png";

const modalRoot = document.getElementById("react-modals");

const Details = (props) => {
  return ReactDOM.createPortal(
    <div className={style.background}>
      <div className={style.cart}>
        <div className={style.container}>
          <div className={style.button_container}>
            <CloseIcon
              type="primary"
              onClick={() => props.showDetails(false)}
            />
          </div>
          <div className={style.text_container}>
            <p className="text text_type_digits-large">034536</p>
          </div>
          <div className={style.text_container2}>
            <p className="text text_type_main-medium">идентификатор заказа</p>
          </div>
          <img
            src={img}
            alt="заказ готовится"
            className={style.image_container}
          />
          <div className={style.text_container3}>
            <p className="text text_type_main-default">
              Ваш заказ начали готовить
            </p>
          </div>
          <div className={style.text_container3}>
            <p className="text text_type_main-default text_color_inactive">
              Дождитесь готовности на орбитальной станции
            </p>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Details;
