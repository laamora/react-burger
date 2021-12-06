import React from "react";
import style from "./constructor.module.css";
import BurgerIngedients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function Constructor() {
  return (
    <div className={style.Container}>
      <DndProvider backend={HTML5Backend}>
        <div className={style.Container2}>
          <BurgerIngedients />
        </div>
        <div className={style.Container3}>
          <BurgerConstructor />
        </div>
      </DndProvider>
    </div>
  );
}

export default Constructor;
