import { TransitionProvider } from "./context/Transition/TransitionProvider";
import { MainRouter } from "./router/mainRouter";

export const FibetechApp = () => {
  return (
    <>
      <TransitionProvider>
        <MainRouter />
      </TransitionProvider>
    </>
  );
};

export default FibetechApp;
