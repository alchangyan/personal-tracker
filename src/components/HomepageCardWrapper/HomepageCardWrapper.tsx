import type { ReactNode, MouseEvent } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import styles from "./HomepageCardWrapper.module.scss";

interface HomepageCardWrapperProps {
  cardId?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  onClickOutside?: () => void;
  children: ReactNode;
}

function HomepageCardWrapper({
  cardId,
  onClick,
  onClickOutside = () => {},
  children,
}: HomepageCardWrapperProps) {
  return (
    <OutsideClickHandler onOutsideClick={onClickOutside}>
      <div
        className={styles.homepageCardWrapper}
        data-card-id={cardId}
        onClick={onClick}
      >
        {children}
      </div>
    </OutsideClickHandler>
  );
}

export default HomepageCardWrapper;
