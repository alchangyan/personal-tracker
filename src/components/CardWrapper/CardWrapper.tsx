import { useRef } from "react";
import type { ReactNode } from "react";
import cn from "classnames";

import "./CardWrapper.scss";
import useOutsideClick from "@/utils/useOutsideClick";

interface CardWrapperProps {
  cardId: number;
  onClick?: () => void;
  onClickOutside?: () => void;
  transparent?: boolean;
  children: ReactNode;
}

function CardWrapper({
  cardId,
  onClick,
  onClickOutside,
  transparent = false,
  children,
}: CardWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  if (onClickOutside) {
    useOutsideClick(wrapperRef, onClickOutside);
  }

  return (
    <div
      ref={wrapperRef}
      className={cn("cardWrapper", {
        cardWrapper_clickable: !!onClick,
        cardWrapper_transparent: transparent,
      })}
      card-id={cardId}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default CardWrapper;
