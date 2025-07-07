// contexts/TransitionContext.tsx
import { createContext } from "react";

type TransitionContextType = {
  isTransitioning: boolean;
  startTransition: () => void;
  duration: number;
  backgrounds: { current: string; next: string };
  updateBackgrounds: (bgColor: string) => void;
};

export const TransitionContext = createContext<
  TransitionContextType | undefined
>(undefined);
