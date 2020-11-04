import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <Form onSuccess={props.onDismiss} />
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
