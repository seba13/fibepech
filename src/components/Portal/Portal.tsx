import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: React.ReactNode;
}

export const Portal = ({ children }: Props) => {
  const el = useRef(document.createElement("div"));
  useEffect(() => {
    const container = el.current;
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);
  return createPortal(children, el.current);
};
