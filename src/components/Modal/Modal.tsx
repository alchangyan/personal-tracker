import type { ReactNode } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

function Modal({ open, onClose, children }: ModalProps) {
  return createPortal(
    open ? (
      <div className={styles.modalWrapper} onClick={onClose}>
        {children}
      </div>
    ) : null,
    document.body
  );
}

export default Modal;
