import React from "react";
import "./App.css";
import AppHeader from "../app-header/app-header";
import { data } from "../../utils/data";
import { dataForConstructor } from "../../utils/dataForConstructor";
import BurgerIngedients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
// хочу предупредить, что у меня экран 11 дюймов, поэтому ширина и высота главного компонента могут отличаться от макета
// вы можете посмотреть как это выглядит на моем ноуте в src/images/Снимок экрана 2021-10-14 в 23.30.24.png

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="AppContainer">
        <div className="App2Container">
          <BurgerIngedients data={data} />
        </div>
        <div className="App3Container">
          <BurgerConstructor items={dataForConstructor} />
        </div>
      </div>
    </div>
  );
}

export default App;
