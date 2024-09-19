import { type ReactNode } from "react";
import cn from 'classnames'

import "./CardWrapper.scss";

interface CardWrapperProps {
  cardId: number;
  onClick?: () => void;
  transparent?: boolean;
  children: ReactNode;
}

function CardWrapper({ cardId, onClick, transparent = false, children }: CardWrapperProps) {
  return (
    <div className={cn("cardWrapper", {
      cardWrapper_clickable: !!onClick,
      cardWrapper_transparent: transparent,
    })} card-id={cardId} onClick={onClick}>
      {children}
    </div>
  );
}

export default CardWrapper;
