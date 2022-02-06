import React from "react";
import { Redirect, Route } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  path: string;
}

const ProtectedRoute = ({ children, ...rest }: ProtectedRouteProps) => {
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
      exact
      render={({ location }) =>
        isAutenticated() ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
};
export default ProtectedRoute;
