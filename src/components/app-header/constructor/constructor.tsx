import React from "react";
import style from "./constructor.module.css";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Constructor() {
  return (
    <div className={style.containerr}>
      <BurgerIcon type="primary" />
      <div className="ml-2 mr-5 text text_type_main-default">Конструктор</div>
    </div>
  );
}

export default Constructor;
