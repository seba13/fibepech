import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { IMAGES } from "../../../constants/assets";

const NAV = [{l:"Inicio",h:"#home"},{l:"Cursos",h:"#courses"},{l:"Sobre nosotros",h:"#about"},{l:"Galería",h:"#gallery"},{l:"Contacto",h:"#contact"}];
const COURSES = ["Estética","Masoterapia","Peluquería","Deportivo","Gastronomía"];

export const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div>
          <div className="f-logo">
            <img src={IMAGES.logo} alt="FIBEPECH"/>
            <span><span>FIBE</span>PECH</span>
          </div>
          <p className="f-desc">Fundación Integral de Barberos, Estilistas y Peluqueros Educando por Chile</p>
          <div className="f-stripe"/>
          <div className="social-row" style={{marginTop:14}}>
            <a href="https://instagram.com/fibepech" target="_blank" rel="noreferrer" className="social-btn"><Instagram size={14}/></a>
            <a href="https://facebook.com/fibepech" target="_blank" rel="noreferrer" className="social-btn"><Facebook size={14}/></a>
          </div>
        </div>
        <div>
          <p className="f-col-t">Navegación</p>
          <ul className="f-links">
            {NAV.map(n=><li key={n.l}><a href={n.h}>{n.l}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="f-col-t">Cursos</p>
          <ul className="f-links">
            {COURSES.map(c=><li key={c}><a href="#courses">{c}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="f-col-t">Visítanos</p>
          <ul className="f-links">
            <li style={{display:"flex",alignItems:"flex-start",gap:6}}>
              <MapPin size={11} style={{color:"var(--terra-l)",flexShrink:0,marginTop:1}}/> Av. Gómez Carreño 666, Belloto norte, Quilpué
            </li>
            <li style={{display:"flex",alignItems:"center",gap:6}}>
              <Phone size={11} style={{color:"var(--terra-l)",flexShrink:0}}/> +56 9 8602 9932
            </li>
            <li style={{display:"flex",alignItems:"center",gap:6}}>
              <Mail size={11} style={{color:"var(--terra-l)",flexShrink:0}}/> contacto@fibepech.cl
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <span className="f-copy">FIBEPECH © 2026 · Todos los derechos reservados</span>
        <div className="f-pol"><span>Términos</span><span>Privacidad</span></div>
      </div>
    </div>
  </footer>
);
