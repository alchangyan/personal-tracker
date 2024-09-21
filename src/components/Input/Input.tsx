import { useEffect, useRef } from "react";
import type { CSSProperties, ChangeEvent, KeyboardEvent } from "react";

import "./Input.scss";

interface InputProps {
  placeholder?: string;
  focused?: boolean;
  style?: CSSProperties;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
}

function Input({
  placeholder = "",
  focused,
  style = {},
  value,
  onChange,
  onEnter = () => {},
}: InputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleKeyboardInput(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      onEnter();
    }
  }

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
        onKeyUp={handleKeyboardInput}
      />
    </div>
  );
}

export default Input;
