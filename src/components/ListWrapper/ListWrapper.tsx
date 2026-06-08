import { useRef, type ReactNode } from "react";
import cn from "classnames";

import OutsideClickHandler from "react-outside-click-handler";

import styles from "./ListWrapper.module.scss";
interface ListWrapperProps {
  listId: string;
  onClick?: () => void;
  onClickOutside?: (e: MouseEvent) => void;
  children: ReactNode;
}

function ListWrapper({
  listId,
  onClick,
  onClickOutside = () => {},
  children,
}: ListWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <OutsideClickHandler onOutsideClick={onClickOutside}>
      <div
        ref={wrapperRef}
        className={cn(styles.listWrapper, {
          [styles.clickable]: !!onClick,
        })}
        list-id={listId}
        onClick={onClick}
      >
        {children}
      </div>
    </OutsideClickHandler>
  );
}

export default ListWrapper;
