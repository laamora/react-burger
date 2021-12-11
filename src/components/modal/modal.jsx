import React from "react";
import style from "./modal.module.css";
import ModalOverlay from "./modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Modal = ({ children, header, onClose }) => {
  const handleClick = () => {
    onClose();
  };
  const onKeyPressHandler = (e) => {
    if (e.keyCode === 27) {
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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
