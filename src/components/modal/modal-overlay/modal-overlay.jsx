import React from "react";
import ReactDOM from "react-dom";
import style from "./modal-overlay.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeDetails } from "../../../services/actions/ingredient-details";
import { removeOrder } from "../../../services/actions/order-details";

const modalRoot = document.getElementById("react-modals");

const ModalOverlay = ({ children, show }) => {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    if (e.target === document.getElementById("ModalOverlay")) {
      show(false);
      dispatch(removeDetails());
      dispatch(removeOrder());
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
  show: PropTypes.func.isRequired,
};
