import { type CSSProperties, useEffect, useRef } from "react";

import "./Input.scss";

interface InputProps {
  placeholder?: string;
  focused?: boolean;
  style?: CSSProperties;
}

function Input({ placeholder = '', focused, style = {} }: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused])

  return (
    <div className="input" style={style}>
      <input type="text" ref={inputRef} placeholder={placeholder}/>
    </div>
  );
}

export default Input;
