import React, { useEffect, useState } from "react";
import style from "./order-info.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../../services/hooks";
import { IngredientType } from "../../../utils/interface";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
  WS_CONNECTION_START_ALL,
} from "../../../services/actions/wsAction";

export default function OrderInfo() {
  let { id } = useParams<any>();
  const [ingredient, setIngredient] = useState<IngredientType[] | []>();
  const [order, setOrder] = useState<any[] | []>();
  const dispatch = useDispatch();
  const path = window.location.pathname;
  let type = "";
  if (path.includes("profile")) {
    type = WS_CONNECTION_START;
  } else {
    type = WS_CONNECTION_START_ALL;
  }
  useEffect(() => {
    dispatch({ type: type });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  const orders = useSelector((store) => store.ws.messages);
  const ingredients = useSelector((store) => store.ingredients?.ingredients);
  const item = order?.filter((item) => item._id === id)[0];

  useEffect(() => {
    setIngredient(ingredients);
  });
  useEffect(() => {
    setOrder(orders);
  });
  const ingredientsArr: IngredientType[] = [];

  if (ingredient && item) {
    ingredient?.forEach((elemItems) => {
      item?.ingredients.forEach((elemItem: any) => {
        if (elemItems._id === elemItem) {
          ingredientsArr.push(elemItems);
        }
      });
    });
  }

  let orderItems: (IngredientType | undefined)[] = [];
  let buns: (IngredientType | undefined)[] = [];

  ingredientsArr.forEach((element) => {
    if (element.type !== "bun") {
      orderItems.push(element);
    }
    if (element.type === "bun") {
      buns.push(element);
    }
  });

  const totalPrice =
    orderItems.reduce((acc, item) => acc + item!.price, 0) +
    2 * buns.reduce((acc, item) => acc + item!.price, 0);

  const getDate = () => {
    const date =
      new Date().getDate() - Number(item.createdAt.split("T")[0].slice(8));
    const time = item.createdAt.split("T")[1].slice(0, 5);
    if (date < 0) {
      return `Давно, ${time} i-GMT+3`;
    }
    if (date === 0) {
      return `Сегодня, ${time} i-GMT+3`;
    }
    if (date === 1) {
      return `Вчера, ${time} i-GMT+3`;
    }
    if (date > 1) {
      return `${date} дня назад, ${time} i-GMT+3`;
    }
  };
  if (!item) return null;

  return (
    <>
      {ingredient && order && (
        <div className={style.main_container}>
          <p className="text text_type_digits-default mb-10">{`#${item.number}`}</p>
          <h4 className="text text_type_main-medium mb-3">{item.name}</h4>
          <p className={`${style.colorText} text text_type_main-small mb-15`}>
            {item.status === "done"
              ? "Выполнен"
              : item.status === "pending"
              ? " Готовится"
              : "Создан"}
          </p>
          <p className="text text_type_main-medium mb-6">Состав:</p>
          <div className={`${style.ingredients} mb-10`}>
            {ingredientsArr.map((item, i) => (
              <div className={style.container} key={i}>
                <div className={style.nameCont}>
                  <img
                    src={item.image}
                    className={style.image}
                    alt={item.name}
                  />
                  <p className="text text_type_main-default mr-4">
                    {item.name}
                  </p>
                </div>
                <div className={style.total}>
                  <span className="text text_type_digits-default mr-4">
                    {item.type === "bun"
                      ? `2 x ${item.price}`
                      : `1 x ${item.price}`}
                  </span>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            ))}
          </div>
          <div className={style.last}>
            <span className="text text_type_main-small text_color_inactive">
              {getDate()}
            </span>
            <div className={style.total}>
              <div className="text text_type_digits-default mr-2">
                {totalPrice}
              </div>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
