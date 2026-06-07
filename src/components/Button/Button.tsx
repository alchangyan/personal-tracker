import type { ReactElement, CSSProperties } from "react";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  inline?: boolean;
  disabled?: boolean;
  children?: string;
  icon?: ReactElement;
  style?: CSSProperties;
  theme?: "default" | "blue" | 'light';
  onClick?: () => void;
}

function Button({
  inline,
  disabled,
  children,
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
      onClick={onClick}
      style={style}
    >
      {icon}
      {children && <span>{children}</span>}
    </div>
  );
}

export default Button;
