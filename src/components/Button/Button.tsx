import type { ReactElement, CSSProperties } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  inline?: boolean;
  children?: string;
  icon?: ReactElement;
  style?: CSSProperties;
  theme?: "default" | "blue";
  onClick?: () => void;
}

function Button({
  inline,
  children,
  icon,
  theme = "default",
  style = {},
  onClick = () => {},
}: ButtonProps) {
  return (
    <div
      className={cn(styles.button, {
        [styles.inline]: inline,
        [styles[theme]]: inline,
      })}
      onClick={onClick}
      style={style}
    >
      {icon}
      {children && <span>{children}</span>}
    </div>
  );
}

export default Button;
