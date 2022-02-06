import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./order-item.module.css";
import { useSelector } from "../../services/hooks";
import { IngredientType, OrdersType } from "../../utils/interface";
import { useHistory } from "react-router-dom";

const getImgs = (
  bun: IngredientType[] | undefined,
  ingredients: IngredientType[] | undefined
) => {
  const items = ingredients!.slice(0, 3);
  const bun2 = bun![0];
  const lastItem = ingredients![3] ? ingredients![3] : null;
  const lastNumber = ingredients!.slice(4, ingredients!.length).length;
  return (
    <div className={style.image_container}>
      {bun2 && (
        <div
          className={style.image_item}
          style={{
            background: `url(${bun2.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
      )}
      {items.map((el, i) => {
        return (
          <div
            key={i}
            className={style.image_item}
            style={{
              background: `url(${el.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
        );
      })}
      {lastItem && lastNumber !== 0 && (
        <div
          className={style.image_item_last}
          style={{
            background: `url(${lastItem.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div
            className={`${style.text_last} text text_type_digits-medium`}
          >{`+${lastNumber}`}</div>
        </div>
      )}
    </div>
  );
};

const OrderItem = ({ item }: { item: OrdersType }) => {
  const history = useHistory();
  let currentPath = "";

  if (window.location.pathname.includes("feed")) {
    currentPath = "/feed";
  } else {
    currentPath = "/profile/orders";
  }

  function openModal() {
    history.push({
      state: { background: { pathname: currentPath } },
      pathname: `${currentPath}/${item._id}`,
    });
  }
  const ingredients = useSelector((store) => store.ingredients.ingredients);
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
  const getIngredients = () => {
    let orderItems: IngredientType[] = [];
    item.ingredients.forEach((el) => {
      ingredients.forEach((element) => {
        if (element._id === el && element.type !== "bun") {
          orderItems.push(element);
        }
      });
    });
    return orderItems;
  };
  const getBuns = () => {
    let buns: IngredientType[] = [];
    item.ingredients.forEach((el) => {
      ingredients.forEach((element) => {
        if (element._id === el && element.type === "bun") {
          buns.push(element);
        }
      });
    });
    return buns;
  };
  const getTotal = () => {
    const ingredients = getIngredients();
    const buns = getBuns();
    return (
      ingredients.reduce((sum, item) => sum + item!.price, 0) +
      2 * buns.reduce((sum, item) => sum + item!.price, 0)
    );
  };
  return (
    <div className={style.order_container} onClick={openModal}>
      <div className={style.inner_container}>
        <span className="text text_type_digits-default">{`#${item.number}`}</span>
        <span className="text text_type_main-small text_color_inactive">
          {getDate()}
        </span>
      </div>
      <div className={style.inner_container2}>
        <p className="text text_type_main-medium mb-2">{item.name}</p>
      </div>
      <div className={style.inner_container2}>
        <p className="text text_type_main-small">
          {item.status === "done"
            ? "Выполнен"
            : item.status === "pending"
            ? " Готовится"
            : "Создан"}
        </p>
      </div>
      <div className={style.inner_container3}>
        {ingredients !== [] && getImgs(getBuns(), getIngredients())}
        <div className={style.total}>
          <div className="text text_type_digits-default mr-2">{getTotal()}</div>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
