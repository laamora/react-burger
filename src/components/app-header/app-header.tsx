import React from "react";
import style from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import Constructor from "./constructor/constructor";
import OrderTape from "./order-tape/order-tape";
import Profile from "./profile/profile";

function AppHeader() {
  return (
    <div className={style.container}>
      <div className={style.container2}>
        <Constructor />
        <OrderTape />
      </div>
      <div className={style.logo_container}>
        <Logo />
      </div>
      <div className={style.container3}>
        <Profile />
      </div>
    </div>
  );
}

export default AppHeader;
