import React, { useState } from "react";
import style from "./ingredient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "./ingredient_details/ingredient_details";
import { dataItem } from "../../../utils/types";

const IngredientItem = (props) => {
  const [details, showDetails] = useState(false);

  return (
    <>
      <div className={style.cart}>
        <img
          src={props.item.image}
          className={style.image}
          alt={props.item.name}
          onClick={() => showDetails(true)}
        />
        <div className={style.count}>
          {props.item._v && <Counter count={props.item._v} size="default" />}
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
      {details && <IngredientDetails show={showDetails} item={props.item} />}
    </>
  );
};

export default IngredientItem;

IngredientItem.propTypes = {
  item: dataItem,
};
