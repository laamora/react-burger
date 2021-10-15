import React from "react";
import style from "./burger-ingredients.module.css";
import BurgerMenu from "./burger-menu/burger-menu";
import IngredientItem from "./ingredient-item/ingredient-item.jsx";
import { data } from "../../utils/types";

function BurgerIngedients(props) {
  return (
    <div className={style.main_container2}>
      <p className="mt-8 mb-4 text text_type_main-large">Соберите бургер</p>
      <div>
        <BurgerMenu />
      </div>
      <div className={style.main_container}>
        <p className="text text_type_main-medium mt-10">Булки</p>
        <div className={style.container}>
          {props.data
            .filter(function (el) {
              return el.type === "bun";
            })
            .map((el) => {
              return <IngredientItem key={el._id} item={el} />;
            })}
        </div>
        <p className="text text_type_main-medium mt-10">Соусы</p>
        <div className={style.container}>
          {props.data
            .filter(function (el) {
              return el.type === "sauce";
            })
            .map((el) => {
              return <IngredientItem key={el._id} item={el} />;
            })}
        </div>
        <p className="text text_type_main-medium mt-10">Начинки</p>
        <div className={style.container}>
          {props.data
            .filter(function (el) {
              return el.type === "main";
            })
            .map((el) => {
              return <IngredientItem key={el._id} item={el} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default BurgerIngedients;

BurgerIngedients.propTypes = {
  data: data,
};
