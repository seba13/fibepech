import { IMAGES } from "../../../constants/assets";
const T=[
  {name:"María González",role:"Masajista · Quilpué",     text:"El curso de masoterapia cambió mi vida profesional. Aprendí técnicas reales que aplico cada día. La docente fue increíble y el ambiente muy inclusivo.", img:IMAGES.grupo4},
  {name:"Carlos Medina", role:"Barbero · Egresado 2024", text:"FIBEPECH es un espacio único en la región. La inclusión real que viven en todos sus programas es admirable.", img:IMAGES.grupo5},
  {name:"Ana Flores",    role:"Repostera · Egresada 2025",text:"El programa gastronómico me dio herramientas reales de inserción laboral. Lo recomiendo al 100%.", img:IMAGES.hitDance1},
];
const STACK=[IMAGES.grupo1,IMAGES.grupo2,IMAGES.grupo3];
export const Testimonials = () => (
  <section className="testi-section section">
    <div className="container">
      <div className="testi-topbar">
        <div>
          <div className="eyebrow"><span className="eyebrow-line"/><span className="eyebrow-text">Testimonios</span></div>
          <h2 className="section-title" style={{marginBottom:0}}>Lo que dicen<br/>nuestros <em>estudiantes</em></h2>
        </div>
        <div className="testi-nav">
          <button className="tn-btn">&#8592;</button>
          <button className="tn-btn">&#8594;</button>
        </div>
      </div>
      <div className="tgrid">
        <div className="tcard featured">
          <div className="t-stack">
            {STACK.map((s,i)=><div key={i} className="tav-s"><img src={s} alt=""/></div>)}
            <div className="t-more">+42</div>
          </div>
          <p className="t-count">200+ <span>estudiantes formados</span></p>
          <div className="t-divider"/>
          <div className="tq">"</div>
          <div className="tstars">★★★★★</div>
          <p className="ttext">{T[0].text}</p>
          <div className="tauthor"><div className="tav"><img src={T[0].img} alt={T[0].name}/></div><div><p className="tname">{T[0].name}</p><p className="trole">{T[0].role}</p></div></div>
        </div>
        {T.slice(1).map(t=>(
          <div key={t.name} className="tcard">
            <div className="tq">"</div>
            <div className="tstars">★★★★★</div>
            <p className="ttext">{t.text}</p>
            <div className="tauthor"><div className="tav"><img src={t.img} alt={t.name}/></div><div><p className="tname">{t.name}</p><p className="trole">{t.role}</p></div></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
