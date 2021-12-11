import React from "react";
import style from "./app-header.module.css";
import { Route, Link } from "react-router-dom";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import Constructor from "./constructor/constructor";
import OrderTape from "./order-tape/order-tape";
import Profile from "./profile/profile";

function AppHeader() {
  return (
    <Route>
      <div className={style.container}>
        <div className={style.container2}>
          <Constructor />
          <OrderTape />
        </div>
        <Link to={"/"} className={style.logo_container}>
          <Logo />
        </Link>
        <div className={style.container3}>
          <Profile />
        </div>
      </div>
    </Route>
  );
}

export default AppHeader;
