import React from "react";
import style from "./order-tape.module.css";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function OrderTape() {
  return (
    <div className={style.container}>
      <ListIcon type="secondary" />
      <div className="ml-2 text text_type_main-default text_color_inactive">
        Лента заказов
      </div>
    </div>
  );
}

export default OrderTape;
