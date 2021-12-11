import React from "react";
import style from "./modal.module.css";
import ModalOverlay from "./modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  header?: string | undefined;
}

const Modal = ({ children, header, onClose }: ModalProps) => {
  const handleClick = () => {
    onClose();
  };

  const onKeyPressHandler = (evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      onClose();
    } else return;
  };

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyPressHandler, false);
    return () => {
      document.removeEventListener("keydown", onKeyPressHandler, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ModalOverlay onClose={onClose}>
      <div className={style.cart}>
        <div className={style.container}>
          <div className={style.button_container}>
            {header && <p className="text text_type_main-large">{header}</p>}
            {!header && <div className={style.empty_div}></div>}
            <CloseIcon type="primary" onClick={() => handleClick()} />
          </div>
          {children}
        </div>
      </div>
    </ModalOverlay>
  );
};

export default Modal;
