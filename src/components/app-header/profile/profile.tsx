import React from "react";
import style from "./profile.module.css";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Profile() {
  return (
    <div className={style.container}>
      <ProfileIcon type="secondary" />
      <div className="ml-2 text text_type_main-default text_color_inactive">
        Личный кабинет
      </div>
    </div>
  );
}

export default Profile;
