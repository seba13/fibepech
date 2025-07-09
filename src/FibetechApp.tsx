import { TransitionProvider } from "./context/Transition/TransitionProvider";
import { MainRouter } from "./router/mainRouter";

export const FibetechApp = () => {
  return (
    <>
      <TransitionProvider transitionDuration={300}>
        <MainRouter />
      </TransitionProvider>
    </>
  );
};

export default FibetechApp;
