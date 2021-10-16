import React, { useEffect, useState } from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { PRODUCT_URL } from "../../utils/constants";
import { dataForConstructor } from "../../utils/dataForConstructor";
import BurgerIngedients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
// хочу предупредить, что у меня экран 13 дюймов, поэтому ширина и высота главного компонента могут отличаться от макета
// вы можете посмотреть как это выглядит на моем ноуте в src/images/Снимок экрана 2021-10-14 в 23.30.24.png

function App() {
  const [state, setState] = useState({
    data: [],
  });

  useEffect(() => {
    getIngredient();
  }, []);

  function getIngredient() {
    fetch(PRODUCT_URL)
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((e) => {
        console.log(e);
      });
  }

  const { data } = state;

  return (
    <div className={style.App}>
      <AppHeader />
      <div className={style.AppContainer}>
        <div className={style.App2Container}>
          <BurgerIngedients data={data} />
        </div>
        <div className={style.App3Container}>
          <BurgerConstructor items={dataForConstructor} />
        </div>
      </div>
    </div>
  );
}

export default App;
