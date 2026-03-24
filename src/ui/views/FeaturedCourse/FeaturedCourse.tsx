import { useState } from "react";
import { X } from "lucide-react";
import { IMAGES } from "../../../constants/assets";
import { Portal } from "../../../components/Portal/Portal";

const TAGS = [
  "Pastelería",
  "Panificación",
  "Banquetería",
  "Inclusión TEA",
  "Cocina institucional",
];
const STATS = [
  { num: "5+", label: "Módulos" },
  { num: "100%", label: "Inclusivo" },
  { num: "Cert.", label: "Oficial" },
];
const CONTENT = [
  "Pastelería y repostería profesional",
  "Panificación artesanal",
  "Técnicas de banquetería",
  "Cocina institucional",
  "Organización de eventos",
  "Preparaciones para celíacos y diabéticos",
  "Coctelería básica",
  "Ornamentación de pastelería",
];

export const FeaturedCourse = () => {
  const [modal, setModal] = useState(false);

  return (
    <section
      className="feat-section section"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="container feat-grid">
        <div>
          <div className="feat-badge">
            <div className="feat-badge-dot" />
            <span className="feat-badge-lbl">Curso destacado</span>
          </div>
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Gastronomía inclusiva</span>
          </div>
          <h2 className="section-title">
            Capacitación
            <br />
            <em>Gastronómica</em>
            <br />
            Inclusiva
          </h2>
          <p className="body-text">
            Formación en panadería, pastelería y cocina institucional para
            personas del espectro autista. Un espacio real de aprendizaje y
            oportunidad de inserción laboral significativa.
          </p>
          <div className="feat-tags">
            {TAGS.map((t) => (
              <span key={t} className="feat-tag">
                {t}
              </span>
            ))}
          </div>
          <button
            className="btn btn-outline"
            style={{ marginTop: 0 }}
            onClick={() => setModal(true)}
          >
            Conocer el curso <span className="btn-arrow" />
          </button>
        </div>
        <div className="feat-visual">
          <div className="feat-img">
            <img src={IMAGES.cardGastro} alt="Gastronomía" />
          </div>
          <div className="feat-stats">
            {STATS.map((s) => (
              <div key={s.label} className="fstat">
                <span>{s.num}</span>
                <small>{s.label}</small>
              </div>
            ))}
          </div>
        </div>
      </div>

      {modal && (
        <Portal>
          <div className="modal-overlay" onClick={() => setModal(false)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setModal(false)}>
                <X size={16} />
              </button>
              <div className="modal-img-wrap">
                <img
                  className="modal-img"
                  src={IMAGES.cardGastro}
                  alt="Gastronomía"
                />
              </div>
              <div className="modal-body">
                <h3 className="modal-title">
                  <em>Capacitación Gastronómica Inclusiva</em>
                </h3>
                <p className="modal-desc">
                  Formación integral en artes culinarias orientada a personas
                  con condición del espectro autista. Brindamos herramientas
                  reales para una inserción laboral significativa.
                </p>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--terra)",
                    marginBottom: 10,
                  }}
                >
                  Contenidos del curso
                </p>
                <div className="modal-items">
                  {CONTENT.map((c) => (
                    <div key={c} className="modal-item">
                      <span className="modal-item-dot" />
                      {c}
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="btn btn-terra"
                  style={{ display: "inline-flex", marginTop: 16 }}
                  onClick={() => setModal(false)}
                >
                  Inscribirme <span className="btn-arrow" />
                </a>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </section>
  );
};
