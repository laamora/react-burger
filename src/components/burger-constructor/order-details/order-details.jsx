import React from "react";
import style from "./order-details.module.css";
import img from "../../../images/done.png";
import Modal from "../../modal/modal";

const OrderDetails = ({ show }) => {
  const onKeyPressHandler = (e) => {
    if (e.keyCode === 27) {
      console.log(e);
      console.log(e.keyCode);
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
    <Modal show={show}>
      <div className={style.text_container}>
        <p className="text text_type_digits-large">034536</p>
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
