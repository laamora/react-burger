import React from "react";
import ReactDOM from "react-dom";
import style from "./modal-overlay.module.css";

const modalRoot = document.getElementById("react-modals");

const ModalOverlay = ({ children, show }) => {
  const clickHandler = (e) => {
    if (e.target === document.getElementById("ModalOverlay")) {
      console.log("e.target", e.target);
      console.log("e.currentTarget", e.currentTarget);
      show(false);
    }
  };
  return ReactDOM.createPortal(
    <div
      className={style.background}
      id={"ModalOverlay"}
      onClick={clickHandler}
    >
      {children}
    </div>,
    modalRoot
  );
};

export default ModalOverlay;
