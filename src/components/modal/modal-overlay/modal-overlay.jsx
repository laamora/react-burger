import React from "react";
import ReactDOM from "react-dom";
import style from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

const ModalOverlay = ({ children, onClose }) => {
  const clickHandler = (e) => {
    if (e.target === document.getElementById("ModalOverlay")) {
      onClose();
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

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
