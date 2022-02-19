import React, { Component } from "react";
import { ModalBackdrop, ModalContent } from "./Modal.styled";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
      console.log("нажали эскейп");
    }
  };
  handleBackdropClick = (event) => {
    // console.log('кликнули в бекдроп');
    // console.log('currentTarget:', event.currentTarget);
    // console.log('target:', event.target);
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent>{this.props.children}</ModalContent>
      </ModalBackdrop>,
      modalRoot
    );
  }
}
export default Modal;
