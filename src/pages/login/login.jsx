import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./login.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../services/actions/auth";

const Login = () => {
  const history = useHistory();
  const [value, setValue] = useState({
    password: "",
    email: "",
  });
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        email: value.email,
        password: value.password,
        history: history,
      })
    );
  };

  return (
    <div className={style.Container}>
      <div className={style.Container2}>
        <form className={style.Container3} onSubmit={submit}>
          <h2 className={"text text_type_main-medium"}>Вход</h2>
          <Input
            type={"text"}
            placeholder={"E-mail"}
            size={"default"}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
          <PasswordInput
            name={"password"}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
          <Button type="primary" size="medium">
            Войти
          </Button>
        </form>
        <div className={style.Container4}>
          <span className={"text text_type_main-default text_color_inactive"}>
            Вы — новый пользователь?{" "}
            <Link to={"/register"} className={style.move}>
              Зарегистрироваться
            </Link>
          </span>
          <span className="text text_type_main-default text_color_inactive">
            Забыли пароль?{" "}
            <Link to={"/forgot-password"} className={style.move}>
              Восстановить пароль
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
