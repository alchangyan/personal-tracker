import type { ReactElement, CSSProperties } from "react";
import cn from "classnames";

import "./Button.scss";

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
      className={cn("button", {
        button_inline: inline,
        [`button_${theme}`]: inline,
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
