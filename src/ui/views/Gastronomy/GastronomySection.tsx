import { useState } from "react";
import { GASTRO_IMAGES } from "../../../constants/assets";

const IMAGES = [
  { src: GASTRO_IMAGES.cocina1, alt: "Taller gastronómico",  pos: "center 35%" },
  { src: GASTRO_IMAGES.cocina2, alt: "Cocina inclusiva",     pos: "center center" },
];

export const GastronomySection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="gastronomy-wrapper">

      {/* ── Desktop: card floating above images ── */}
      <div className="gastronomy-card">
        <GastroCard />
      </div>

      {/* ── Desktop: side-by-side images ── */}
      <div className="gastronomy-images">
        <ImageCell img={IMAGES[0]} fadeDir="right" />
        <ImageCell img={IMAGES[1]} fadeDir="left"  />
      </div>

      {/* ── Mobile: card + image carousel ── */}
      <div className="gastronomy-mobile">
        <div className="gastronomy-mobile-card">
          <GastroCard />
        </div>

        {/* Carousel */}
        <div className="gastronomy-carousel">
          {/* Track */}
          <div
            className="gastronomy-carousel-track"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {IMAGES.map((img, i) => (
              <div key={i} className="gastronomy-carousel-slide">
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ objectPosition: img.pos }}
                />
                {/* Top fade so it blends upward */}
                <div className="gastronomy-carousel-fade-top" />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="gastronomy-carousel-dots">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                className={`gastronomy-carousel-dot${i === active ? " active" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Imagen ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            className="gastronomy-carousel-arrow gastronomy-carousel-arrow-prev"
            onClick={() => setActive((p) => (p - 1 + IMAGES.length) % IMAGES.length)}
            aria-label="Anterior"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M6.5 1.5L3 5l3.5 3.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="gastronomy-carousel-arrow gastronomy-carousel-arrow-next"
            onClick={() => setActive((p) => (p + 1) % IMAGES.length)}
            aria-label="Siguiente"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M3.5 1.5L7 5l-3.5 3.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
};

/* ── Shared card content ─────────────────────────────────────────────────── */
const GastroCard = () => (
  <div style={{
    background: "rgba(14,11,9,0.86)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    border: "1px solid rgba(196,132,110,0.22)",
    borderRadius: 16,
    padding: "22px 40px 26px",
    textAlign: "center",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "center", marginBottom: 10 }}>
      <span style={{ display: "block", width: 18, height: 1, background: "var(--terra-l)" }} />
      <span style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--terra-l)" }}>
        Inclusión laboral
      </span>
      <span style={{ display: "block", width: 18, height: 1, background: "var(--terra-l)" }} />
    </div>
    <h2 style={{ fontFamily: "Georgia,serif", fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 300, color: "#fff", lineHeight: 1.2, marginBottom: 10 }}>
      Un espacio de<br />
      <em style={{ fontStyle: "italic", color: "var(--terra-l)" }}>aprendizaje real</em>
    </h2>
    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, marginBottom: 18 }}>
      Nuestro programa gastronómico está diseñado para personas con condición
      del espectro autista, brindando herramientas concretas para una inserción
      laboral significativa.
    </p>
    <a href="#courses" style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "var(--terra)", color: "#fff",
      padding: "10px 22px", borderRadius: 22,
      fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none",
    }}>
      Conocer el programa
      <span style={{ display: "inline-block", width: 14, height: 1, background: "#fff", position: "relative" }}>
        <span style={{ position: "absolute", right: -1, top: -3, borderStyle: "solid", borderWidth: "3px 0 3px 5px", borderColor: "transparent transparent transparent #fff" }} />
      </span>
    </a>
  </div>
);

/* ── Desktop image cell ──────────────────────────────────────────────────── */
const ImageCell = ({ img, fadeDir }: { img: typeof IMAGES[0]; fadeDir: "left" | "right" }) => (
  <div style={{ position: "relative", overflow: "hidden" }}>
    <img src={img.src} alt={img.alt} style={{
      position: "absolute", inset: 0, width: "100%", height: "100%",
      objectFit: "cover", objectPosition: img.pos, display: "block",
    }} />
    <div style={{
      position: "absolute", inset: 0,
      background: `linear-gradient(to ${fadeDir}, transparent 70%, rgba(14,11,9,0.6) 100%)`,
    }} />
    <div style={{
      position: "absolute", top: 0, left: 0, right: 0, height: 80,
      background: "linear-gradient(to bottom, rgba(14,11,9,0.6), transparent)",
    }} />
  </div>
);