import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./reset-password.module.css";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../services/actions/auth";

const Reset = () => {
  const history = useHistory();
  const [value, setValue] = useState({
    password: "",
    token: "",
  });
  const dispatch = useDispatch();

  const isSuccess = useSelector((state) => state.auth.resetSuccess);

  useEffect(() => {
    if (isSuccess) {
      history.replace({ pathname: "/login" });
    }
  }, [isSuccess, history]);

  return (
    <div className={style.Container}>
      <div className={style.Container2}>
        <div className={style.Container3}>
          <h2 className={"text text_type_main-medium"}>
            Восстановление пароля
          </h2>
          <PasswordInput
            name={"password"}
            placeholder={"Введите новый пароль"}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            name={"reset"}
            error={false}
            errorText={"Ошибка"}
            value={value.token}
            size={"default"}
            onChange={(e) => setValue({ ...value, token: e.target.value })}
          />
          <Button
            type="primary"
            size="medium"
            onClick={() => dispatch(resetPassword(value))}
          >
            Сохранить
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

export default Reset;
