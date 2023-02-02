/* eslint-disable react-hooks/exhaustive-deps */
import { RefObject, useCallback, useEffect, useState } from "react";

const useToggleBtn = (array: RefObject<HTMLElement | HTMLButtonElement>[]) => {
  const [isOpen, setOpen] = useState(false);

  const openHandler = useCallback(() => {
    setOpen(true);
  }, []);

  const closeHandler = useCallback(() => {
    setOpen(false);
  }, []);

  const closeIfClickOutside = useCallback(
    (e: Event) => {
      let check = 0;
      for (const i of array) {
        if (!i.current || !i.current.contains(e.target as Node)) check += 1;
      }
      if (isOpen && check === array.length) {
        setOpen(false);
        check = 0;
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener("click", closeIfClickOutside);
    return () => {
      window.removeEventListener("click", closeIfClickOutside);
    };
  }, [isOpen]);

  return [isOpen, openHandler, closeHandler] as const;
};

export default useToggleBtn;
