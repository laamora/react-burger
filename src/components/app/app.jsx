import React, { useEffect } from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header";
import { BrowserRouter as Router } from "react-router-dom";
import AppBody from "../app-body/app-body";
import { useDispatch } from "react-redux";
import { getUserData } from "../../services/actions/auth";
import { fetchData } from "../../services/actions/burger-ingredients";
// хочу предупредить, что у меня экран 13 дюймов, поэтому ширина и высота главного компонента могут отличаться от макета
// вы можете посмотреть как это выглядит на моем ноуте в src/images/Снимок экрана 2021-10-14 в 23.30.24.png
// когда я пушу у меня app.jsx постоянно переименовывается в App.jsx
// из-за этого в файле src/index.tsx возникает ошибка импорта

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  });
  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className={style.App}>
        <AppHeader />
        <div className={style.AppContainer}>
          <AppBody />
        </div>
      </div>
    </Router>
  );
}

export default App;
