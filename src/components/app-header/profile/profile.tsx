import React from "react";
import style from "./profile.module.css";
import { NavLink, useRouteMatch } from "react-router-dom";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Profile() {
  const isProfile = !!useRouteMatch("/profile");
  return (
    <NavLink
      className={style.container}
      to={"/profile"}
      activeClassName={style.active}
    >
      <ProfileIcon type={isProfile ? "primary" : "secondary"} />
      <div className="ml-2 text text_type_main-default">Личный кабинет</div>
    </NavLink>
  );
}

export default Profile;
