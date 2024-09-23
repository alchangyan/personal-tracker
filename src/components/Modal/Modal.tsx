import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";

import { closeModal } from "@/store/slices/modalSlice";

import "./Modal.scss";

function Modal() {
  const dispatch = useDispatch();
  const { open } = useSelector<RootState, RootState["modal"]>(
    (state) => state.modal
  );


  function handleCloseModal() {
    dispatch(closeModal({}))
  }

  return createPortal(
    open ? <div className="modal-wrapper" onClick={handleCloseModal}/> : null,
    document.body
  );
}

export default Modal;
