import React from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngedients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// хочу предупредить, что у меня экран 13 дюймов, поэтому ширина и высота главного компонента могут отличаться от макета
// вы можете посмотреть как это выглядит на моем ноуте в src/images/Снимок экрана 2021-10-14 в 23.30.24.png
// когда я пушу у меня app.jsx постоянно переименовывается в App.jsx
// из-за этого в файле src/index.tsx возникает ошибка импорта

function App() {
  return (
    <div className={style.App}>
      <AppHeader />
      <div className={style.AppContainer}>
        <DndProvider backend={HTML5Backend}>
          <div className={style.App2Container}>
            <BurgerIngedients />
          </div>
          <div className={style.App3Container}>
            <BurgerConstructor />
          </div>
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
