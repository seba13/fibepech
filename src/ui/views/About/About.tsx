import { IMAGES } from "../../../constants/assets";
export const About = () => (
  <section className="about-section section" id="about">
    <div className="container about-grid">
      <div>
        <div className="eyebrow"><span className="eyebrow-line"/><span className="eyebrow-text">Sobre FIBEPECH</span></div>
        <h2 className="section-title">Tu formación y<br/>éxito <em>empieza aquí</em></h2>
        <p className="body-text" style={{marginBottom:20}}>Somos una fundación sin fines de lucro que promueve el desarrollo personal y profesional de barberos, estilistas y peluqueros de Chile. Nacemos del compromiso de fortalecer el oficio a través de la educación, la capacitación continua y la generación de espacios inclusivos.</p>
        <a href="#courses" className="btn btn-outline">Leer más <span className="btn-arrow"/></a>
      </div>
      <div className="about-photos">
        <div className="aph tall"><img src={IMAGES.logo} alt="Grupo FIBEPECH"/></div>
        <div className="aph "><img src={IMAGES.grupo1} alt="Grupo FIBEPECH"/></div>
        <div className="aph"><img src={IMAGES.clase} alt="Clase"/></div>
        <div className="aph-disc"><p>Descubre tu potencial</p>
        {/* <span>Galería de egresados</span> */}
        </div>
      </div>
    </div>
  </section>
);
