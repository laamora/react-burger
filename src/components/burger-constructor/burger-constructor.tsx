import React, { useState } from "react";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor.module.css";
import { useDrop } from "react-dnd";
import {
  clearAll,
  setBun,
  setIngredient,
} from "../../services/actions/burger-constructor";
import ConstructorIngredient from "./constructor-ingredient/constructor-ingredient";
import { getNumber, removeOrder } from "../../services/actions/order-details";
import { isAutenticated } from "../../utils/functions";
import { useHistory } from "react-router";
import OrderDetails from "./order-details/order-details";
import { IngredientItemType } from "../../utils/interface";
import { useDispatch, useSelector } from "../../services/hooks";

const BurgerConstructor = () => {
  const [details, showDetails] = useState(false);
  const dispatch = useDispatch();
  const bun = useSelector((state) => state.constructors.bun);
  const success = useSelector((state) => state.order.orderSuccess);
  const ingredients = useSelector((state) => state.constructors?.ingredients);
  const sumTotal = ingredients?.reduce((sum, { price }) => sum + price, 0);
  const history = useHistory();

  const handleClick = () => {
    if (!isAutenticated()) {
      history.replace("/login");
    } else {
      showDetails(true);
      const Ids = [...ingredients.map((item) => item._id), bun!._id];
      console.log(Ids);
      dispatch(getNumber(Ids));
    }
  };

  function handleClose() {
    if (success) {
      dispatch(clearAll());
    }
    dispatch(removeOrder());
    showDetails(false);
  }

  const getFullPrice = () => {
    if (bun && ingredients.length > 0) {
      return bun?.price * 2 + sumTotal;
    } else if (bun) {
      return bun?.price * 2;
    } else if (ingredients.length > 0) {
      return sumTotal;
    } else {
      return 0;
    }
  };

  const [, dropRef] = useDrop(
    {
      accept: "ingredient",
      drop(item: IngredientItemType) {
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
      <div className={style.main} ref={dropRef}>
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
                    id={el._id}
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
            <p className="text text_type_digits-medium mr-3">
              {getFullPrice()}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            type="primary"
            size="medium"
            onClick={() => handleClick()}
            //@ts-ignore
            disabled={!bun}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
      {details && <OrderDetails onClose={handleClose} />}
    </>
  );
};

export default BurgerConstructor;
