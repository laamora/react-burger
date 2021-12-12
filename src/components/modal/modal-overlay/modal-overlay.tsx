import React from "react";
import ReactDOM from "react-dom";
import style from "./modal-overlay.module.css";
import { useHistory } from "react-router";

const modalRoot = document.getElementById("react-modals");

interface ModalOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalOverlay = ({ children, onClose }: ModalOverlayProps) => {
  const history = useHistory();
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === document.getElementById("ModalOverlay")) {
      onClose();
      history.replace("/");
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
    modalRoot!
  );
};

export default ModalOverlay;
