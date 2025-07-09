// contexts/TransitionContext.tsx
import { createContext } from "react";

type TransitionContextType = {
  isTransitioning: boolean;
  startTransition: () => void;
  endTransition: () => void;
  nextBackground: (bg: string) => void;
  transitionDuration: number;
  animationDuration: number;
  background: string;
  // duration: number;
  // backgrounds: { current: string; next: string };
  // updateBackgrounds: (bgColor: string) => void;
};

export const TransitionContext = createContext<
  TransitionContextType | undefined
>(undefined);
