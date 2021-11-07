import React, { useEffect, useRef, useState } from "react";
import style from "./burger-ingredients.module.css";
import BurgerMenu from "./burger-menu/burger-menu";
import IngredientItem from "./ingredient-item/ingredient-item.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../services/actions/burger-ingredients";

function BurgerIngedients() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ingredients = useSelector((state) => state.ingredients?.ingredients);

  const tabsRef = useRef();
  const bunsRef = useRef();
  const saucesRef = useRef();
  const mainsRef = useRef();
  const [currentTab, setCurrentTab] = useState("bun");

  const checkActualTab = () => {
    const tabsTop = tabsRef.current.getBoundingClientRect().top;
    const bunsDistance = Math.abs(
      tabsTop - bunsRef.current.getBoundingClientRect().top
    );
    const saucesDistance = Math.abs(
      tabsTop - saucesRef.current.getBoundingClientRect().top
    );
    const mainsDistance = Math.abs(
      tabsTop - mainsRef.current.getBoundingClientRect().top
    );
    const minValue = Math.min(bunsDistance, saucesDistance, mainsDistance);
    if (minValue === bunsDistance) {
      setCurrentTab("bun");
    } else if (minValue === saucesDistance) {
      setCurrentTab("sauce");
    } else {
      setCurrentTab("main");
    }
  };

  return (
    <div className={style.main_container2}>
      <p className="mt-8 mb-4 text text_type_main-large">Соберите бургер</p>
      <div ref={tabsRef}>
        <BurgerMenu currentTab={currentTab} />
      </div>
      <div className={style.main_container} onScroll={checkActualTab}>
        <p className="text text_type_main-medium mt-10">Булки</p>
        <div className={style.container} ref={bunsRef}>
          {ingredients &&
            ingredients
              .filter(function (el) {
                return el.type === "bun";
              })
              .map((el) => {
                return <IngredientItem key={el._id} item={el} />;
              })}
        </div>
        <p className="text text_type_main-medium mt-10">Соусы</p>
        <div className={style.container} ref={saucesRef}>
          {ingredients &&
            ingredients
              .filter(function (el) {
                return el.type === "sauce";
              })
              .map((el) => {
                return <IngredientItem key={el._id} item={el} />;
              })}
        </div>
        <p className="text text_type_main-medium mt-10">Начинки</p>
        <div className={style.container} ref={mainsRef}>
          {ingredients &&
            ingredients
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
