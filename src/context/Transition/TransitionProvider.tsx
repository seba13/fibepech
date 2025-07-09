import {
  // useRef,
  useState,
} from "react";
import { TransitionContext } from "./TransitionContext";

export const TransitionProvider = ({
  children,
  transitionDuration = 1000,
  animationDuration = 5000,
}: {
  transitionDuration?: number;
  animationDuration?: number;
  children: React.ReactNode;
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [background, setBackground] = useState(
    "linear-gradient(to right, #74503C 0%, #9B6C52 50%, #74503C 100%)"
  );

  const startTransition = () => {
    setIsTransitioning(true);
  };

  const endTransition = () => {
    setIsTransitioning(false);
  };

  const nextBackground = (bg: string) => {
    setBackground(bg);
  };

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning,
        startTransition,
        endTransition,
        nextBackground,
        background,
        transitionDuration,
        animationDuration,
        // duration: duration.current,
        // backgrounds,
        // updateBackgrounds,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};
