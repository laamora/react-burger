import React, { useState } from "react";
import {
  ConstructorElement,
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
import ConstructorIngredient from "./constructor-ingredient/constructor-ingredient";

const BurgerConstructor = () => {
  const [details, showDetails] = useState(false);
  const dispatch = useDispatch();
  const bun = useSelector((state) => state.constructors.bun);
  const ingredients = useSelector((state) => state.constructors?.ingredients);
  const sumTotal = ingredients?.reduce((sum, { price }) => sum + price, 0);
  const fullPrice =
    bun && ingredients.length > 0 ? bun?.price * 2 + sumTotal : 0;

  const [, dropRef] = useDrop(
    {
      accept: "ingredient",
      drop(item) {
        if (item.type === "bun") {
          dispatch(setBun(item));
        } else {
          dispatch(setIngredient(item));
        }
      },
    },
    []
  );

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
          {bun && (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
        </div>
        <div className={style.container2}>
          <div className={style.container1}>
            {ingredients.length !== 0 &&
              ingredients.map((el, i) => {
                return (
                  <ConstructorIngredient
                    key={el.key}
                    id={el.id}
                    el={el}
                    index={i}
                  />
                );
              })}
          </div>
        </div>
        <div className="pr-4">
          {bun && (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          )}
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
            disabled={!bun}
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
