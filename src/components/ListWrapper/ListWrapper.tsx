import { type ReactNode } from "react";
import cn from 'classnames'
import "./ListWrapper.scss";

interface ListWrapperProps {
  listId: number;
  onClick?: () => void;
  children: ReactNode;
}

function ListWrapper({ listId, onClick, children }: ListWrapperProps) {
  return (
    <div className={cn("listWrapper", {
      listWrapper_clickable: !!onClick
    })} list-id={listId} onClick={onClick}>
      {children}
    </div>
  );
}

export default ListWrapper;
