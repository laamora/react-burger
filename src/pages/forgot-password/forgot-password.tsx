import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./forgot-password.module.css";
import { forgotPassword } from "../../services/actions/auth";
import { useDispatch, useSelector } from "../../services/hooks";

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

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(forgotPassword(value));
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.name === "forgot" && setValue(e.target.value);
  };

  return (
    <div className={style.Container}>
      <div className={style.Container2}>
        <form className={style.Container3} onSubmit={submit}>
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
          <Button type="primary" size="medium">
            Восстановить
          </Button>
        </form>
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
