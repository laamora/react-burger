import React from "react";
import style from "./ingredient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { setDetails } from "../../../services/actions/ingredient-details";
import { DragPreviewImage, useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RooteReducer } from "../../../services/reducers/interface";
import { IngredientItemType } from "../../../utils/interface";

interface IngredientItemProps {
  item: IngredientItemType;
}

const IngredientItem = ({ item }: IngredientItemProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [{ isDragging }, dragRef, preview] = useDrag({
    type: "ingredient",
    item: { ...item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.5 : 1;

  const ingredients = useSelector((state: RooteReducer) => state.constructors);
  const itemCount = () => {
    if (
      item.type === "bun" &&
      ingredients.bun &&
      item._id === ingredients.bun._id
    ) {
      return 2;
    } else if (ingredients.ingredients) {
      return ingredients.ingredients.filter((el) => el._id === item._id)
        .length === 0
        ? null
        : ingredients.ingredients.filter((el) => el._id === item._id).length;
    } else return null;
  };

  const handleClick = () => {
    dispatch(setDetails(item));
    history.push({
      state: { background: { pathname: "/" } },
      pathname: `/ingredients/${item._id}`,
    });
  };

  return (
    <>
      <DragPreviewImage connect={preview} src={item.image} />
      <div className={style.cart} ref={dragRef} style={{ ...style, opacity }}>
        <img
          src={item.image}
          className={style.image}
          alt={item.name}
          onClick={() => handleClick()}
        />
        <div className={style.count}>
          {/*@ts-ignore*/}
          {itemCount() && <Counter count={itemCount()} size="default" />}
        </div>
        <div className={style.price}>
          <p className="text text_type_digits-default mr-3">{item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <div className={style.name}>
          <p
            className="text text_type_main-default"
            style={{ height: "48px", textAlign: "center" }}
          >
            {item.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default IngredientItem;
