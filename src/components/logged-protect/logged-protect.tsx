import React from "react";
import { Redirect, Route } from "react-router-dom";

interface LoggedProtectProps {
  children: React.ReactNode;
  exact: boolean;
  path: string;
}

const LoggedProtect = ({ children, ...rest }: LoggedProtectProps) => {
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

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAutenticated() ? (
          children
        ) : (
          <Redirect to={{ pathname: "profile", state: { from: location } }} />
        )
      }
    />
  );
};
export default LoggedProtect;
