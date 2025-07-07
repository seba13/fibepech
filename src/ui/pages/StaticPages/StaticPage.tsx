// import { useCallback, useState } from 'react';
// import { Courses } from '../../../views/Courses/Courses';
// import { Header } from '../../../views/Header/Header';

import { Header } from "../../views/Header/Header";
import { Courses } from "../../views/Courses/Courses";
import { About } from "../../views/About/About";
import { Footer } from "../../views/Footer/Footer";

export const StaticPage = () => {
  return (
    <div>
      <div
        id="home"
        className="static-container"
        style={{
          position: "relative",
          // backgroundImage: background,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <Header />
      </div>

      <Courses />
      <About />
      <Footer />
    </div>
  );
};
