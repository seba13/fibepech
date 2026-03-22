import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { IMAGES } from "../../../constants/assets";
import { Portal } from "../../../components/Portal/Portal";

const COURSES = [
  {
    id: 1,
    name: "Estética facial",
    img: IMAGES.cardEstetica,
    desc: "Aprende técnicas profesionales de maquillaje, cuidado facial y manicura.",
    items: [
      "Maquillaje profesional",
      "Limpieza facial profunda",
      "Manicure y Pedicure",
      "Depilación",
      "Podología",
      "Belleza de cejas y pestañas",
    ],
  },
  {
    id: 2,
    name: "Masoterapia",
    img: IMAGES.cardMasso,
    desc: "Terapias manuales diseñadas para aliviar el estrés y equilibrar tu cuerpo.",
    items: [
      "Masajes de relajación",
      "Drenajes linfáticos",
      "Masaje cérvico craneal",
      "Reflexología",
      "Flores de Bach",
      "Piedras calientes",
      "Masaje reductivo",
    ],
  },
  {
    id: 3,
    name: "Peluquería",
    img: IMAGES.cardPelu,
    desc: "Domina técnicas de peinado, coloración y cuidado del cabello.",
    items: [
      "Peinados",
      "Cortes dama y varón",
      "Trenzas",
      "Masaje capilar",
      "Texturizado químico",
      "Elaboración de productos",
    ],
  },
  {
    id: 4,
    name: "Barbería",
    img: IMAGES.cardBabería,
    desc: "Técnicas modernas de barbería para el cuidado y estilo masculino.",
    items: [
      "Cortes modernos",
      "Afeitado clásico",
      "Diseño de barba",
      "Tratamientos capilares",
      "Barbería artística",
    ],
  },
  {
    id: 5,
    name: "Gastronomía",
    img: IMAGES.cardGastro,
    desc: "Curso inclusivo de capacitación gastronómica para personas del espectro autista.",
    items: [
      "Pastelería",
      "Panificación",
      "Banquetería",
      "Cocina institucional",
      "Organización de eventos",
      "Coctelería",
      "Preparaciones para celíacos",
    ],
  },
  {
    id: 6,
    name: "Deportivos",
    img: IMAGES.cardSports,
    desc: "Actividades físicas orientadas al bienestar, la coordinación y el desarrollo integral del cuerpo.",
    items: [
      "Yoga",
      "Defensa personal",
      "Taichi",
      "Baile",
      "Baile entretenido",
      "Zumba",
      "Karate",
      "Pausas activas",
    ],
  },
];
const AUTO_INTERVAL = 4000;

export const Services = () => {
  const [active, setActive] = useState(0);
  const [imgKey, setImgKey] = useState(0);
  const [modal, setModal] = useState<(typeof COURSES)[0] | null>(null);
  const [modalIdx, setModalIdx] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const selectCourse = (i: number) => {
    if (i === active) return;
    setActive(i);
    setImgKey((k) => k + 1);
  };

  useEffect(() => {
    if (modal) return;
    autoRef.current = setInterval(() => {
      setActive((a) => {
        const n = (a + 1) % COURSES.length;
        setImgKey((k) => k + 1);
        return n;
      });
    }, AUTO_INTERVAL);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, [modal]);

  const openModal = (idx: number) => {
    setModalIdx(idx);
    setModal(COURSES[idx]);
  };
  const prevModal = () => {
    const i = (modalIdx - 1 + COURSES.length) % COURSES.length;
    setModalIdx(i);
    setModal(COURSES[i]);
  };
  const nextModal = () => {
    const i = (modalIdx + 1) % COURSES.length;
    setModalIdx(i);
    setModal(COURSES[i]);
  };
  const svc = COURSES[active];

  return (
    <section
      className="services-section section"
      id="courses"
      style={{ position: "relative", zIndex: 1, isolation: "isolate" }}
    >
      <div className="container">
        <div className="sec-topbar">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Categorías</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Cursos que <em>ofrecemos</em>
            </h2>
          </div>
          <button className="more-link" onClick={() => openModal(active)}>
            Ver cursos <span className="btn-arrow" />
          </button>
        </div>

        <div className="svc-layout">
          <div className="svc-list">
            {COURSES.map((s, i) => (
              <button
                key={s.id}
                className={`svc-item${i === active ? " active" : ""}`}
                onClick={() => {
                  selectCourse(i);

                  if (autoRef.current) clearInterval(autoRef.current);

                  autoRef.current = setInterval(() => {
                    setActive((a) => {
                      const n = (a + 1) % COURSES.length;
                      setImgKey((k) => k + 1);
                      return n;
                    });
                  }, AUTO_INTERVAL);
                }}
              >
                <div className="svc-item-l">
                  <div className="svc-av">
                    <img src={s.img} alt={s.name} />
                  </div>
                  <span className="svc-nm">{s.name}</span>
                </div>
                {i === active ? (
                  <div className="svc-ck">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1.5 4L3 5.5L6.5 2"
                        stroke="#FFF"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                ) : (
                  <div className="svc-dot" />
                )}
              </button>
            ))}
          </div>

          <div className="svc-vis">
            <div
              className="svc-big"
              onClick={() => openModal(active)}
              style={{ padding: 10 }}
            >
              <img
                key={`img-${imgKey}`}
                src={svc.img}
                alt={svc.name}
                className="svc-big-img svc-img-in"
              />
              <div className="svc-big-overlay" />
              <button
                className="svc-big-badge"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(active);
                }}
              >
                Ver detalle
              </button>
              <p className="svc-big-lbl">Especialidad</p>
              <p className="svc-big-title">{svc.name}</p>
            </div>
            <div className="svc-smg">
              <div className="svc-sm">
                <img src={IMAGES.grupo2} alt="Taller" />
              </div>
              <div className="svc-sm">
                <img src={IMAGES.grupo3} alt="Clase" />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 6,
            marginTop: 16,
            justifyContent: "center",
          }}
        >
          {COURSES.map((_, i) => (
            <button
              key={i}
              onClick={() => selectCourse(i)}
              style={{
                width: i === active ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === active ? "var(--terra)" : "var(--sand-dk)",
                border: "none",
                cursor: "pointer",
                transition: "all .35s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* Modal rendered in Portal — escapes all stacking contexts */}
      {modal && (
        <Portal>
          <div
            className="modal-overlay"
            onClick={() => setModal(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              background: "rgba(18,10,6,0.7)",
              backdropFilter: "blur(4px)",
              animation: "fadeIn .2s ease",
            }}
          >
            <div
              className="modal-box"
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "var(--cream)",
                borderRadius: 20,
                maxWidth: 680,
                width: "100%",
                maxHeight: "88vh",
                overflowY: "auto",
                position: "relative",
                animation: "scaleIn .25s ease",
              }}
            >
              <button className="modal-close" onClick={() => setModal(null)}>
                <X size={16} />
              </button>
              <button
                className="modal-nav-btn modal-nav-prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevModal();
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="modal-nav-btn modal-nav-next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextModal();
                }}
              >
                <ChevronRight size={16} />
              </button>
              <div className="modal-img-wrap">
                <img
                  key={modal.id}
                  className="modal-img modal-img-fade"
                  src={modal.img}
                  alt={modal.name}
                />
              </div>
              <div className="modal-body">
                <h3 className="modal-title">
                  <em>{modal.name}</em>
                </h3>
                <p className="modal-desc">{modal.desc}</p>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--terra)",
                    marginBottom: 10,
                  }}
                >
                  Cursos incluidos
                </p>
                <div className="modal-items">
                  {modal.items.map((item) => (
                    <div key={item} className="modal-item">
                      <span className="modal-item-dot" />
                      {item}
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 5, margin: "16px 0" }}>
                  {COURSES.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setModalIdx(i);
                        setModal(COURSES[i]);
                      }}
                      style={{
                        width: i === modalIdx ? 16 : 5,
                        height: 5,
                        borderRadius: 3,
                        background:
                          i === modalIdx ? "var(--terra)" : "var(--sand-dk)",
                        border: "none",
                        cursor: "pointer",
                        transition: "all .3s",
                        padding: 0,
                      }}
                    />
                  ))}
                </div>
                <a
                  href="#contact"
                  className="btn btn-terra"
                  style={{ display: "inline-flex" }}
                  onClick={() => setModal(null)}
                >
                  Recibir mas información <span className="btn-arrow" />
                </a>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </section>
  );
};
