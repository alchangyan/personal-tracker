import type { ReactElement, CSSProperties, MouseEvent } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  inline?: boolean;
  disabled?: boolean;
  dataId?: string;
  children?: string;
  icon?: ReactElement;
  style?: CSSProperties;
  theme?: "default" | "blue" | "light";
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}

function Button({
  inline,
  disabled,
  children,
  dataId,
  icon,
  theme = "default",
  style = {},
  onClick = () => {},
}: ButtonProps) {
  return (
    <div
      className={cn(styles.button, styles[theme], {
        [styles.inline]: inline,
        [styles.disabled]: disabled,
      })}
      data-id={dataId}
      onClick={onClick}
      style={style}
    >
      {icon}
      {children && <span>{children}</span>}
    </div>
  );
}

export default Button;
