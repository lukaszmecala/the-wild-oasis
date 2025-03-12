import { useEffect, useRef } from "react";

export function useOutsideClick(handle) {
  const ref = useRef();

  useEffect(() => {
    const handleClose = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handle();
      }
    };
    document.addEventListener("click", handleClose, true);
    return () => {
      document.removeEventListener("click", handleClose, true);
    };
  }, [handle]);

  return ref;
}
