import { useState } from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export const Contact = () => {
  const [f, setF] = useState({nombre:"",telefono:"",email:"",mensaje:""});
  const [sent, setSent] = useState(false);
  const ch = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setF(p=>({...p,[e.target.name]:e.target.value}));
  const sub = (e: React.FormEvent) => {
    e.preventDefault();
    const s = encodeURIComponent("Consulta desde FIBEPECH.CL");
    const b = encodeURIComponent(`Nombre: ${f.nombre}\nTeléfono: ${f.telefono}\nEmail: ${f.email}\n\nMensaje:\n${f.mensaje}`);
    window.open(`mailto:contacto@fibepech.cl?subject=${s}&body=${b}`);
    setSent(true);
    setTimeout(()=>setSent(false),4000);
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="contact-dots"/>
      <div className="container contact-grid">
        {/* Form */}
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" style={{background:"var(--terra-l)"}}/>
            <span className="eyebrow-text" style={{color:"var(--terra-l)"}}>Contáctanos</span>
          </div>
          <h2 className="contact-h">Escríbenos,<br/>estamos <em>aquí</em></h2>
          <p className="contact-sub">Resolvemos todas tus dudas sobre cursos, inscripciones y programas disponibles.</p>
          <form className="cform" onSubmit={sub}>
            <div className="cform-row">
              <div className="cf"><label className="clbl">Nombre</label><input className="cinp" name="nombre" value={f.nombre} onChange={ch} placeholder="Tu nombre" required/></div>
              <div className="cf"><label className="clbl">Teléfono</label><input className="cinp" name="telefono" value={f.telefono} onChange={ch} placeholder="+56 9..."/></div>
            </div>
            <div className="cf"><label className="clbl">Email</label><input className="cinp" type="email" name="email" value={f.email} onChange={ch} placeholder="tu@email.cl" required/></div>
            <div className="cf"><label className="clbl">Mensaje</label><textarea className="cinp ctextarea" name="mensaje" value={f.mensaje} onChange={ch} placeholder="¿En qué curso estás interesado/a?"/></div>
            <button type="submit" className="btn btn-terra" style={{marginTop:6,alignSelf:"flex-start"}}>
              {sent?"¡Mensaje enviado! ✓":"Enviar mensaje"} <span className="btn-arrow"/>
            </button>
          </form>
        </div>

        {/* Info */}
        <div>
          <p className="ci-info-title">Información de contacto</p>
          {[
            {icon:<MapPin size={13}/>, label:"Dirección", val:"Av. Gómez Carreño 666, Belloto norte, Quilpué"},
            {icon:<Phone size={13}/>,  label:"Teléfono",  val:"+56 9 8602 9932"},
            {icon:<Mail size={13}/>,   label:"Email",     val:"contacto@fibepech.cl"},
          ].map(item=>(
            <div key={item.label} className="ci-item">
              <div className="ci-icon">{item.icon}</div>
              <div><p className="ci-lbl">{item.label}</p><p className="ci-val">{item.val}</p></div>
            </div>
          ))}

          {/* Real Google Maps embed */}
          <div className="ci-map-real">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1182.522355578567!2d-71.4055632758645!3d-33.03860474868589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9689d9c9ea4bd533%3A0xf64d3180e540edd5!2sAlmte.%20Gomez%20Carre%C3%B1o%20666%2C%202420719%20Marga%20Marga%2C%20Quilpu%C3%A9%2C%20Valpara%C3%ADso!5e0!3m2!1ses-419!2scl!4v1751876330386!5m2!1ses-419!2scl"
              width="100%"
              height="100%"
              style={{border:0,display:"block"}}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación FIBEPECH"
            />
          </div>

          <div className="social-row">
            <a href="https://instagram.com/fibepech" target="_blank" rel="noreferrer" className="social-btn"><Instagram size={14}/></a>
            <a href="https://facebook.com/fibepech" target="_blank" rel="noreferrer" className="social-btn"><Facebook size={14}/></a>
          </div>
        </div>
      </div>
    </section>
  );
};
