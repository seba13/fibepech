// import { IMAGES } from "../../../constants/assets";
// export const About = () => (
//   <section className="about-section section" id="about">
//     <div className="container about-grid">
//       <div>
//         <div className="eyebrow">
//           <span className="eyebrow-line" />
//           <span className="eyebrow-text">Sobre FIBEPECH</span>
//         </div>
//         <h2 className="section-title">
//           Tu formación y<br />
//           éxito <em>empieza aquí</em>
//         </h2>
//         <p className="body-text" style={{ marginBottom: 20 }}>
//           Somos una fundación sin fines de lucro que promueve el desarrollo
//           personal y profesional de barberos, estilistas y peluqueros de Chile.
//           Nacemos del compromiso de fortalecer el oficio a través de la
//           educación, la capacitación continua y la generación de espacios
//           inclusivos.
//         </p>
//         <a href="#courses" className="btn btn-outline">
//           Leer más <span className="btn-arrow" />
//         </a>
//       </div>
//       <div className="about-photos">
//         <div className="aph tall">
//           <img
//             src={IMAGES.logo}
//             alt="Grupo FIBEPECH"
//             className="!object-contain w-full h-full"
//           />
//         </div>
//         <div className="aph ">
//           <img src={IMAGES.grupo1} alt="Grupo FIBEPECH" />
//         </div>
//         <div className="aph">
//           <img src={IMAGES.clase} alt="Clase" />
//         </div>
//         <div className="aph-disc">
//           <p>Descubre tu potencial</p>
//           {/* <span>Galería de egresados</span> */}
//         </div>
//       </div>
//     </div>
//   </section>
// );


import { useState } from "react";
import { IMAGES } from "../../../constants/assets";
import { MediaLightbox, type MediaItem } from '../../components/MediaLightBox/MediaLightBox';
// import { MediaLightbox, type MediaItem } from "";

const ABOUT_IMAGES: MediaItem[] = [
  { type: "image", src: IMAGES.logo,   alt: "Grupo FIBEPECH" },
  { type: "image", src: IMAGES.grupo1, alt: "Grupo FIBEPECH" },
  { type: "image", src: IMAGES.clase,  alt: "Clase" },
];

export const About = () => {
  const [lbIdx, setLbIdx] = useState<number | null>(null);

  return (
    <section className="about-section section" id="about">
      <div className="container about-grid">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Sobre FIBEPECH</span>
          </div>
          <h2 className="section-title">
            Tu formación y<br />
            éxito <em>empieza aquí</em>
          </h2>
          <p className="body-text" style={{ marginBottom: 20 }}>
            Somos una fundación sin fines de lucro que promueve el desarrollo
            personal y profesional de barberos, estilistas y peluqueros de Chile.
            Nacemos del compromiso de fortalecer el oficio a través de la
            educación, la capacitación continua y la generación de espacios
            inclusivos.
          </p>
          <a href="#courses" className="btn btn-outline">
            Leer más <span className="btn-arrow" />
          </a>
        </div>
        <div className="about-photos">
          <div className="aph tall" onClick={() => setLbIdx(0)} style={{ cursor: "pointer" }}>
            <img
              src={IMAGES.logo}
              alt="Grupo FIBEPECH"
              className="!object-contain w-full h-full"
            />
          </div>
          <div className="aph" onClick={() => setLbIdx(1)} style={{ cursor: "pointer" }}>
            <img src={IMAGES.grupo1} alt="Grupo FIBEPECH" />
          </div>
          <div className="aph" onClick={() => setLbIdx(2)} style={{ cursor: "pointer" }}>
            <img src={IMAGES.clase} alt="Clase" />
          </div>
          <div className="aph-disc">
            <p>Descubre tu potencial</p>
          </div>
        </div>
      </div>

      <MediaLightbox
        items={ABOUT_IMAGES}
        currentIndex={lbIdx}
        onClose={() => setLbIdx(null)}
        onNavigate={setLbIdx}
      />
    </section>
  );
};