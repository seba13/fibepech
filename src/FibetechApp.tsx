import { TransitionProvider } from "./context/Transition/TransitionProvider";
import { MainRouter } from "./router/mainRouter";

export const FibetechApp = () => {
  return (
    <>
      <TransitionProvider transitionDuration={300} animationDuration={15000}>
        <MainRouter />
      </TransitionProvider>
    </>
  );
};

export default FibetechApp;
