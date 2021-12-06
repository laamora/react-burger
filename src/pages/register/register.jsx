import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./register.module.css";
import { useDispatch } from "react-redux";
import { register } from "../../services/actions/auth";

const Register = () => {
  const [value, setValue] = useState({
    name: "",
    password: "",
    email: "",
  });
  const dispatch = useDispatch();

  return (
    <div className={style.Container}>
      <div className={style.Container2}>
        <div className={style.Container3}>
          <h2 className={"text text_type_main-medium"}>Регистрация</h2>
          <Input
            type={"text"}
            placeholder={"Имя"}
            name={"register"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
          <Input
            type={"text"}
            placeholder={"E-mail"}
            name={"register"}
            error={false}
            errorText={"Ошибка"}
            size={"default"}
            value={value.email}
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
          <PasswordInput
            name={"password"}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
          <Button
            type="primary"
            size="medium"
            onClick={() => dispatch(register(value))}
          >
            Зарегистрироваться
          </Button>
        </div>
        <div className={style.Container4}>
          <span className={"text text_type_main-default text_color_inactive"}>
            Уже зарегистрированы?{" "}
            <Link to={"/login"} className={style.move}>
              Войти
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;