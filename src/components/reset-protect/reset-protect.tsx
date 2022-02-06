import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "../../services/hooks";

interface ResetProtectProps {
  children: React.ReactNode;
  exact: boolean;
  path: string;
}

const ResetProtect = ({ children, ...rest }: ResetProtectProps) => {
  const isTokenExpired = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const decodedJwt = parseJwtToken(accessToken);
      return decodedJwt.exp * 1000 < Date.now();
    }
  };

  const parseJwtToken = (token: string) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
      console.log(error);
    }
  };

  function isAutenticated() {
    return localStorage.getItem("accessToken") && !isTokenExpired();
  }

  const isForgotSuccess = useSelector((state) => state.auth.forgotSuccess);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAutenticated() && isForgotSuccess ? (
          children
        ) : (
          <Redirect to={{ pathname: "profile", state: { from: location } }} />
        )
      }
    />
  );
};
export default ResetProtect;
