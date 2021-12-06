import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import Constructor from "../../pages/constructor/constructor";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import Forgot from "../../pages/forgot-password/forgot-password";
import Reset from "../../pages/reset-password/reset-password";
import Ingredients from "../../pages/ingredients/ingredients";
import Profile from "../../pages/profile/profile";
import ProtectedRoute from "../protected-route/protected-route";
import LoggetProtect from "../logget-protect/logget-protect";
import ResetProtect from "../reset-protect/reset-protect";
import { useDispatch, useSelector } from "react-redux";
import { removeDetails } from "../../services/actions/ingredient-details";
import IngredientDetails from "../burger-ingredients/ingredient-item/ingredient_details/ingredient_details";

const AppBody = () => {
  const location = useLocation();
  const background = location.state?.background;
  const dispatch = useDispatch();
  const history = useHistory();

  const { show } = useSelector((state) => state.details);
  const handleClose = () => {
    dispatch({ type: "CLOSE_DETAILS" });
    dispatch(removeDetails());
    history.replace("/");
  };
  return (
    <main>
      <Switch location={background ?? location}>
        <Route exact path="/">
          <Constructor />
        </Route>
        <LoggetProtect exact path="/login">
          <Login />
        </LoggetProtect>
        <LoggetProtect exact path="/register">
          <Register />
        </LoggetProtect>
        <LoggetProtect exact path="/forgot-password">
          <Forgot />
        </LoggetProtect>
        <ResetProtect exact path="/reset-password">
          <Reset />
        </ResetProtect>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path="/ingredients/:id">
          <Ingredients />
        </Route>
        <Route></Route>
      </Switch>
      {background && (
        <Route path="/ingredients/:id">
          {show && <IngredientDetails onClose={handleClose} />}
        </Route>
      )}
    </main>
  );
};

export default AppBody;
