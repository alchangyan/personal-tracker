import { createPortal } from "react-dom";

import { useDispatch, useSelector } from "@/store";
import { closeModal } from "@/store/slices/modalSlice";

import styles from "./Modal.module.scss";

function Modal() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.modal);

  function handleCloseModal() {
    dispatch(closeModal({}));
  }

  return createPortal(
    open ? (
      <div className={styles.modalWrapper} onClick={handleCloseModal} />
    ) : null,
    document.body
  );
}

export default Modal;
