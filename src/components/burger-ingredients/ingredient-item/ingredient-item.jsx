import React, { useState } from "react";
import style from "./ingredient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  removeDetails,
  setDetails,
} from "../../../services/actions/ingredient-details";
import IngredientDetails from "./ingredient_details/ingredient_details";
import { dataItem } from "../../../utils/types";
import { DragPreviewImage, useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";

const IngredientItem = (props) => {
  const [details, showDetails] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    showDetails(false);
    dispatch(removeDetails());
  };

  const { item } = props;
  const [{ isDragging }, dragRef, preview] = useDrag({
    type: "ingredient",
    item: { ...item },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.5 : 1;

  const ingredients = useSelector((state) => state.constructors);
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
    showDetails(true);
    dispatch(setDetails(item));
  };

  return (
    <>
      <DragPreviewImage connect={preview} src={props.item.image} />
      <div className={style.cart} ref={dragRef} style={{ ...style, opacity }}>
        <img
          src={props.item.image}
          className={style.image}
          alt={props.item.name}
          onClick={() => handleClick()}
        />
        <div className={style.count}>
          {itemCount() && <Counter count={itemCount()} size="default" />}
        </div>
        <div className={style.price}>
          <p className="text text_type_digits-default mr-3">
            {props.item.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <div className={style.name}>
          <p
            className="text text_type_main-default"
            style={{ height: "48px", textAlign: "center" }}
          >
            {props.item.name}
          </p>
        </div>
      </div>
      {details && <IngredientDetails onClose={handleClose} />}
    </>
  );
};

export default IngredientItem;

IngredientItem.propTypes = {
  item: dataItem,
};
