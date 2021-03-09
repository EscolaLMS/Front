import React, { ReactElement } from "react";
import ReactModal from "react-modal";
import Icon from "../Icon";
import "./index.scss";

interface IModal {
  close: () => void;
  isOpen: boolean;
  className?: string;
  withHeader?: boolean;
  title?: string;
}

const Modal: React.FC<IModal> = ({
  children,
  isOpen,
  close,
  className,
  withHeader,
  title,
}): ReactElement => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      onRequestClose={() => close()}
      className={`modal ${className}`}
    >
      <div className="modal-wrapper">
        {withHeader && (
          <header className="modal-header">
            <h2>{title}</h2>
            <button className="button close" onClick={() => close()}>
              <Icon name="close" />
            </button>
          </header>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </ReactModal>
  );
};

export default Modal;
