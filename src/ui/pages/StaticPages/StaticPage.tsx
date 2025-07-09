// import { useCallback, useState } from 'react';
// import { Courses } from '../../../views/Courses/Courses';
// import { Header } from '../../../views/Header/Header';

import { Header } from "../../views/Header/Header";
import { Courses } from "../../views/Courses/Courses";
import { About } from "../../views/About/About";
import { Footer } from "../../views/Footer/Footer";
import { GalleryView } from "../../views/Gallery/GalleryView";
// import { Contact } from "../../views/Contact/Contact";

// import { carruselItems } from "../../constants/carruselItems";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react";
import { useTransition } from "../../../hooks/useTransition";
import { carouselItems } from "../../constants/carruselItems";

export const StaticPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [background, setBackground] = useState(carruselItems[0].linearGradient);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const index = useRef<number>(0);

  const [currBg, setCurrBg] = useState(carouselItems[0].linearGradient);
  const { isTransitioning, background, endTransition, transitionDuration } =
    useTransition();

  // const duration = 1000;

  // useEffect(() => {
  //   setTimeout(() => {
  //     // animación fade-out
  //     // se cambia opacidad a 0 del fondo actual
  //     // queda visible el fondo previsorio con isTransitioning
  //     // pasado el tiempo
  //     // actualiza next por current

  //     if (isTransitioning) {
  //       setCurrBg(background);
  //       endTransition();
  //     }
  //   }, duration);
  // }, [isTransitioning]);

  useEffect(() => {
    const updateCarousel = () => {
      if (!isTransitioning) return;

      setCurrBg(background);
      endTransition();
    };

    const timeout = setTimeout(updateCarousel, transitionDuration);

    return () => {
      clearTimeout(timeout);
    };
  }, [isTransitioning]);

  return (
    <div className="fade-in" style={{ minWidth: 250 }}>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: currBg,
          ...(isTransitioning
            ? {
                animationName: "fadeOut",
                animationDuration: `${transitionDuration}ms`,
                animationFillMode: "forwards",
              }
            : {}),
        }}
      ></div>

      {
        <div
          style={{
            opacity: isTransitioning ? 1 : 0,
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: -1,
            backgroundImage: background,
          }}
        />
      }

      <div
        id="home"
        className="static-container"
        style={{
          position: "relative",

          // transition: "background-image 1s ease-in-out",
        }}
      >
        <Header />
      </div>

      <Courses />
      <About />
      <GalleryView />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};
