import { useContext } from "react";
import { TransitionContext } from "../context/Transition/TransitionContext";

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};
