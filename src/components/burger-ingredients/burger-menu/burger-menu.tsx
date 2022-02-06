import React, { useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-menu.module.css";

interface BurgerMenuProps {
  currentTab: string;
}

const BurgerMenu = ({ currentTab }: BurgerMenuProps) => {
  const [current, setCurrent] = useState<string | undefined>();

  useEffect(() => {
    setCurrent(currentTab);
  }, [currentTab]);

  return (
    <div className={style.main}>
      <Tab value="one" active={current === "bun"} onClick={() => {}}>
        Булки
      </Tab>
      <Tab value="two" active={current === "sauce"} onClick={() => {}}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "main"} onClick={() => {}}>
        Начинки
      </Tab>
    </div>
  );
};

export default BurgerMenu;
