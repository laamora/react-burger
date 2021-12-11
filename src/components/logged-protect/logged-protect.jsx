import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const LoggedProtect = ({ children, ...rest }) => {
  const isTokenExpired = () => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const decodedJwt = parseJwtToken(accessToken);
      return decodedJwt.exp * 1000 < Date.now();
    }
  };

  const parseJwtToken = (token) => {
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
LoggedProtect.propTypes = {
  children: PropTypes.element.isRequired,
};
