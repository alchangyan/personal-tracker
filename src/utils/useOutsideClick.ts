import { useEffect } from 'react'
import type { RefObject, MouseEvent } from 'react'

export default function useOutsideClick(ref: RefObject<HTMLDivElement>, cb: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent<unknown>) {
      
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    
    // @ts-ignore
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      // @ts-ignore
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}