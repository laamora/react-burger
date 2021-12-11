import React from "react";
import style from "./constructor.module.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Constructor() {
  const isConstructor = !!useRouteMatch({ path: "/", exact: true });
  return (
    <NavLink
      className={style.container}
      to={"/"}
      activeClassName={style.active}
      exact
    >
      <BurgerIcon type={isConstructor ? "primary" : "secondary"} />
      <div className="ml-2 mr-5 text text_type_main-default">Конструктор</div>
    </NavLink>
  );
}

export default Constructor;
