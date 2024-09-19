import { useEffect, useRef } from "react";
import type { CSSProperties, ChangeEvent } from "react";

import "./Input.scss";

interface InputProps {
  placeholder?: string;
  focused?: boolean;
  style?: CSSProperties;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  placeholder = "",
  focused,
  style = {},
  value,
  onChange,
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused]);

  return (
    <div className="input" style={style}>
      <input
        type="text"
        ref={inputRef}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
