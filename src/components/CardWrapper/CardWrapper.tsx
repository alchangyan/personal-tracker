import { useRef } from "react";
import type { ReactNode } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";

import styles from "./CardWrapper.module.scss";

interface CardWrapperProps {
  cardId: number;
  onClick?: () => void;
  onClickOutside?: (e: MouseEvent) => void;
  transparent?: boolean;
  children: ReactNode;
}

function CardWrapper({
  cardId,
  onClick,
  onClickOutside = () => {},
  transparent = false,
  children,
}: CardWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <OutsideClickHandler onOutsideClick={onClickOutside}>
      <div
        ref={wrapperRef}
        className={cn(styles.cardWrapper, {
          [styles.clickable]: !!onClick,
          [styles.transparent]: transparent,
        })}
        card-id={cardId}
        onClick={onClick}
      >
        {children}
      </div>
    </OutsideClickHandler>
  );
}

export default CardWrapper;
