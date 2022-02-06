import React, { useEffect, useState } from "react";
import { NavLink, Route, Switch, useHistory } from "react-router-dom";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./profile.module.css";
import { changeUserData, logout } from "../../services/actions/auth";
import Orders from "./orders/orders";
import { useDispatch, useSelector } from "../../services/hooks";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [hasChanged, setChanged] = useState(false);

  const onChange = () => {
    setChanged(true);
  };
  const userData = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const history = useHistory();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const obj = {
      name: userData.name,
      email: userData.email,
      password: "",
    };
    setUser(obj);
  }, [userData]);

  const cancel = () => {
    const obj = {
      name: userData.name,
      email: userData.email,
      password: "",
    };
    setUser(obj);
    setChanged(false);
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      changeUserData({
        name: user.name,
        email: user.email,
        password: user.password,
      })
    );
  };

  return (
    <div className={style.profile}>
      <div className={style.text_container}>
        <div className={style.links_container}>
          <NavLink
            to={"/profile"}
            exact
            className={`text text_type_main-default ${style.link}`}
            activeClassName={style.active}
          >
            Профиль
          </NavLink>
          <NavLink
            to={"/profile/orders"}
            exact
            className={`text text_type_main-default ${style.link}`}
            activeClassName={style.active}
          >
            История заказов
          </NavLink>
          <button
            className={`text text_type_main-default ${style.link}`}
            onClick={() => dispatch(logout(history))}
          >
            Выход
          </button>
        </div>
        <div>
          <span className={"text text_type_main-default text_color_inactive"}>
            В этом разделе вы можете
            <br /> изменить свои персональные данные
          </span>
        </div>
      </div>
      <Switch>
        <Route path="/profile" exact={true}>
          <form className={style.profile_container} onSubmit={submit}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              value={user.name || ""}
              name={"profile"}
              size={"default"}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
                onChange();
              }}
            />
            <Input
              type={"text"}
              value={user.email || ""}
              placeholder={"Логин"}
              name={"profile"}
              size={"default"}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
                onChange();
              }}
            />
            <PasswordInput
              value={user.password || ""}
              name={"password"}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
                onChange();
              }}
            />
            {hasChanged && (
              <div className={style.button_container}>
                <p
                  className={`text text_type_main-default ${style.cancel}`}
                  onClick={() => cancel()}
                >
                  Отмена
                </p>
                <Button>Сохранить</Button>
              </div>
            )}
          </form>
        </Route>
        <Route path="/profile/orders" exact={true}>
          <Orders />
        </Route>
      </Switch>
    </div>
  );
};

export default Profile;
