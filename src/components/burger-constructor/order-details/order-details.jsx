import React from "react";
import style from "./order-details.module.css";
import img from "../../../images/done.png";
import Modal from "../../modal/modal";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const OrderDetails = ({ onClose }) => {
  const number = useSelector((state) => state.order.orderNumber);
  return (
    <Modal onClose={onClose}>
      <div className={style.text_container}>
        <p className="text text_type_digits-large">{number}</p>
      </div>
      <div className={style.text_container2}>
        <p className="text text_type_main-medium">идентификатор заказа</p>
      </div>
      <img src={img} alt="заказ готовится" className={style.image_container} />
      <div className={style.text_container3}>
        <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      </div>
      <div className={style.text_container4}>
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>
  );
};

export default OrderDetails;

OrderDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
};
