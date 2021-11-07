import React, { useState } from "react";
import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor.module.css";
import OrderDetails from "./order-details/order-details";
import { data } from "../../utils/types";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  setBun,
  setIngredient,
} from "../../services/actions/burger-constructor";

const BurgerConstructor = (props) => {
  const [details, showDetails] = useState(false);
  const { items } = props;
  const topandbutton = items.find((el) => el.type === "bun");
  const sumTotal = items.reduce((sum, { price }) => sum + price, 0);
  const fullPrice = topandbutton.price + sumTotal;

  const dispatch = useDispatch();
  const bun = useSelector((state) => state.constructor.bun);
  const ingredients = useSelector((state) => state.constructor?.ingredients);

  const [, dropRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      if (item.type === "bun") {
        dispatch(setBun(item));
      } else {
        dispatch(setIngredient(item));
        console.log(ingredients);
      }
    },
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "560px",
          alignItems: "end",
          marginTop: "100px",
          width: "588px",
        }}
        ref={dropRef}
      >
        <div className="pr-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${topandbutton.name} (верх)`}
            price={topandbutton.price}
            thumbnail={topandbutton.image}
          />
        </div>
        <div className={style.container2}>
          <div className={style.container1}>
            {console.log(typeof ingredients)}
            {ingredients &&
              ingredients.length !== 0 &&
              ingredients.map((el, i) => {
                return (
                  <div className={style.container} key={i}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={el.name}
                      price={el.price}
                      thumbnail={el.image}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="pr-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun ? bun.name : topandbutton.name} (низ)`}
            price={bun ? bun.price : topandbutton.price}
            thumbnail={bun ? bun.image : topandbutton.image}
          />
        </div>
        <div className={style.button_and_price_container}>
          <div className={style.full_price_container}>
            <p className="text text_type_digits-medium mr-3">{fullPrice}</p>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            type="primary"
            size="medium"
            onClick={() => showDetails(true)}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      {details && <OrderDetails show={showDetails} />}
    </>
  );
};

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  items: data,
};
