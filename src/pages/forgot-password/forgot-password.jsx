import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./forgot-password.module.css";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../services/actions/auth";

const Forgot = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const isSuccess = useSelector((state) => state.auth.forgotSuccess);

  useEffect(() => {
    if (isSuccess) {
      history.replace({ pathname: "/reset-password" });
    }
  }, [isSuccess, history]);

  const click = () => {
    dispatch(forgotPassword(value));
  };

  const changeHandler = (e) => {
    e.target.name === "forgot" && setValue(e.target.value);
  };

  return (
    <div className={style.Container}>
      <div className={style.Container2}>
        <div className={style.Container3}>
          <h2 className={"text text_type_main-medium"}>
            Восстановление пароля
          </h2>
          <Input
            type={"text"}
            placeholder={"Укажите E-mail"}
            value={value}
            name={"forgot"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            onChange={(e) => changeHandler(e)}
          />
          <Button type="primary" size="medium" onClick={click}>
            Восстановить
          </Button>
        </div>
        <div className={style.Container4}>
          <span className={"text text_type_main-default text_color_inactive"}>
            Вспомнили пароль?{" "}
            <Link to={"/login"} className={style.move}>
              Войти
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
