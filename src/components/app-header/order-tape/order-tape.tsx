import React from "react";
import style from "./order-tape.module.css";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useRouteMatch } from "react-router-dom";

function OrderTape() {
  const isOrder = !!useRouteMatch({ path: "/feed", exact: true });
  return (
    <NavLink
      className={style.container}
      to={"/feed"}
      activeClassName={style.active}
      exact
    >
      <ListIcon type={isOrder ? "primary" : "secondary"} />
      <div className="ml-2 text text_type_main-default">Лента заказов</div>
    </NavLink>
  );
}

export default OrderTape;
