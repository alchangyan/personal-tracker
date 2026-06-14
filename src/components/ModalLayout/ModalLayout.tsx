import type { ReactNode } from "react";
import { FaTimes } from "react-icons/fa";

import Button from "@/components/Button";

import styles from "./ModalLayout.module.scss";

interface ModalLayoutProps {
  title?: string;
  onClose?: () => void;
  children: ReactNode;
}

function ModalLayout({ title, onClose, children }: ModalLayoutProps) {
  return (
    <div className={styles.modalLayout} onClick={(e) => e.stopPropagation()}>
      <div className={styles.heading}>
        <div className={styles.title}>{title}</div>
        {onClose && <Button icon={<FaTimes />} onClick={onClose} theme="light"></Button>}
      </div>
      {children}
    </div>
  );
}

export default ModalLayout;
