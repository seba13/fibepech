import { Header } from "../../views/Header/Header";
import { Courses } from "../../views/Courses/Courses";
import { About } from "../../views/About/About";
import { Footer } from "../../views/Footer/Footer";
import { GalleryView } from "../../views/Gallery/GalleryView";

import { useEffect, useState } from "react";
import { useTransition } from "../../../hooks/useTransition";
import { carouselItems } from "../../constants/carruselItems";

export const StaticPage = () => {
  const [currBg, setCurrBg] = useState(carouselItems[0].linearGradient);
  const { isTransitioning, background, endTransition, transitionDuration } =
    useTransition();

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
    <div className="fade-in" style={{ minWidth: 250, minHeight: "100dvh" }}>
      <div
        id="home"
        className="static-container"
        style={{
          position: "relative",

          // transition: "background-image 1s ease-in-out",
        }}
      >
        <div
          style={{
            position: "fixed",
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
              position: "fixed",
              width: "100%",
              height: "100%",
              zIndex: -1,
              backgroundImage: background,
            }}
          />
        }
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
