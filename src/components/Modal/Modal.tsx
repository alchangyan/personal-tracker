import { createPortal } from "react-dom";
import "./Modal.scss";

function Modal() {
  return createPortal(<div className="modal-wrapper" />, document.body);
}

export default Modal;
