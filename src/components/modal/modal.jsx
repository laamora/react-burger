import React from "react";
import style from "./modal.module.css";
import ModalOverlay from "./modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({ children, header, show }) => {
  return (
    <ModalOverlay show={show}>
      <div className={style.cart}>
        <div className={style.container}>
          <div className={style.button_container}>
            {header && <p className="text text_type_main-large">{header}</p>}
            {!header && <div className={style.empty_div}></div>}
            <CloseIcon type="primary" onClick={() => show(false)} />
          </div>
          {children}
        </div>
      </div>
    </ModalOverlay>
  );
};

export default Modal;
