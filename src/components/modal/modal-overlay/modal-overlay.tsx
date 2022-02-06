import React from "react";
import ReactDOM from "react-dom";
import style from "./modal-overlay.module.css";

const modalRoot = document.getElementById("react-modals");

interface ModalOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalOverlay = ({ children, onClose }: ModalOverlayProps) => {
  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) {
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
    modalRoot!
  );
};

export default ModalOverlay;
