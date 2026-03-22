import { useState } from "react";
import { Hero, MobileMenu }     from "../../views/Hero/Hero";
import { About }                from "../../views/About/About";
import { Services }             from "../../views/Services/Services";
import { FeaturedCourse }       from "../../views/FeaturedCourse/FeaturedCourse";
import { GastronomySection }    from "../../views/Gastronomy/GastronomySection";
import { Gallery }              from "../../views/Gallery/Gallery";
import { Testimonials }         from "../../views/Testimonials/Testimonials";
import { Contact }              from "../../views/Contact/Contact";
import { Footer }               from "../../views/Footer/Footer";

export const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {menuOpen && <MobileMenu onClose={()=>setMenuOpen(false)}/>}
      <Hero onMenuOpen={()=>setMenuOpen(true)}/>
      <About/>
      <Services/>
      <FeaturedCourse/>
      <GastronomySection/>
      <Gallery/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
};
