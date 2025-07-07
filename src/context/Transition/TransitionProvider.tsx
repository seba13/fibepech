import { useRef, useState } from "react";
import { TransitionContext } from "./TransitionContext";

export const TransitionProvider = ({
  children,
  timeout,
}: {
  timeout?: number;
  children: React.ReactNode;
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [backgrounds, setBackgrounds] = useState({
    current: "linear-gradient(to right, #74503C 0%, #9B6C52 50%, #74503C 100%)",
    next: "",
  });

  const duration = useRef<number>(timeout || 3000);

  const startTransition = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setBackgrounds((prev) => ({ current: prev.next, next: "" }));
      setIsTransitioning(false);
    }, duration.current); // Duración de la transición
  };

  const updateBackgrounds = (bgColor: string) => {
    setBackgrounds((prev) => ({ ...prev, next: bgColor }));
  };

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        startTransition,
        duration: duration.current,
        backgrounds,
        updateBackgrounds,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};
