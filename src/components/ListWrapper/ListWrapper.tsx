import { useRef, type ReactNode } from "react";
import cn from "classnames";
import "./ListWrapper.scss";
import useOutsideClick from "@/utils/useOutsideClick";

interface ListWrapperProps {
  listId: number;
  onClick?: () => void;
  onClickOutside?: () => void;
  children: ReactNode;
}

function ListWrapper({ listId, onClick, onClickOutside, children }: ListWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  if (onClickOutside) {
    useOutsideClick(wrapperRef, onClickOutside);
  }

  return (
    <div
      ref={wrapperRef}
      className={cn("listWrapper", {
        listWrapper_clickable: !!onClick,
      })}
      list-id={listId}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default ListWrapper;
