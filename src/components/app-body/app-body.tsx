import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Constructor from "../../pages/constructor/constructor";
import style from "./app-body.module.css";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import Forgot from "../../pages/forgot-password/forgot-password";
import Reset from "../../pages/reset-password/reset-password";
import Ingredients from "../../pages/ingredients/ingredients";
import Profile from "../../pages/profile/profile";
import ProtectedRoute from "../protected-route/protected-route";
import LoggedProtect from "../logged-protect/logged-protect";
import ResetProtect from "../reset-protect/reset-protect";
import IngredientDetails from "../burger-ingredients/ingredient-item/ingredient_details/ingredient_details";
import Feed from "../../pages/feed/feed";
import OrderInfo from "../order-item/order-info/order-info";
import Modal from "../modal/modal";

const AppBody = () => {
  const location = useLocation<any>();
  const background = location.state?.background;
  const history = useHistory();

  const handleClose = () => {
    localStorage.removeItem("show");
    history.replace("/");
  };

  return (
    <main className={style.main}>
      <Switch location={background ?? location}>
        <Route exact path={["/", "/react-burger"]}>
          <Constructor />
        </Route>
        <LoggedProtect exact path="/login">
          <Login />
        </LoggedProtect>
        <LoggedProtect exact path="/register">
          <Register />
        </LoggedProtect>
        <LoggedProtect exact path="/forgot-password">
          <Forgot />
        </LoggedProtect>
        <ResetProtect exact path="/reset-password">
          <Reset />
        </ResetProtect>
        <ProtectedRoute path="/profile/orders/:id">
          <div className="pt-10">
            <OrderInfo />
          </div>
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path="/ingredients/:id">
          <Ingredients />
        </Route>
        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/feed/:id">
          <div className="pt-10">
            <OrderInfo />
          </div>
        </Route>
      </Switch>
      {background && (
        <Route path="/ingredients/:id">
          <IngredientDetails onClose={handleClose} />
        </Route>
      )}
      {background && (
        <Route exact path="/feed/:id">
          <Modal header={""} onClose={() => history.replace("/feed")}>
            <OrderInfo />
          </Modal>
        </Route>
      )}
      {background && (
        <ProtectedRoute path="/profile/orders/:id">
          <Modal header={""} onClose={() => history.replace("/profile/orders")}>
            <OrderInfo />
          </Modal>
        </ProtectedRoute>
      )}
    </main>
  );
};

export default AppBody;
