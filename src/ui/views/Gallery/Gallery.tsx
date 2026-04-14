import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { IMAGES, VIDEOS } from "../../../constants/assets";
import { Portal } from "../../../components/Portal/Portal";

const FILTERS = ["Todo", "Cursos", "Talleres", "Eventos"];
type MediaItem = {
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  wide?: boolean;
  tall?: boolean;
  category: string;
};

const ALL_ITEMS: MediaItem[] = [
  {
    type: "video",
    src: VIDEOS.v6.src,
    poster: VIDEOS.v6.poster,
    alt: "Video inductora manicurista",
    wide: false,
    tall: true,
    category: "Eventos",
  },

  {
    type: "image",
    src: IMAGES.escuela,
    alt: "Escuela",
    category: "Cursos",
    wide: true,
    tall: true,
  },
  {
    type: "video",
    src: VIDEOS.v1.src,
    poster: VIDEOS.v1.poster,
    alt: "Video clase",

    category: "Cursos",
  },
  {
    type: "video",
    src: VIDEOS.v3.src,
    poster: VIDEOS.v3.poster,
    alt: "Video taller",
    category: "Talleres",
  },
  { type: "image", src: IMAGES.clase, alt: "Clase", category: "Cursos" },
  {
    type: "video",
    src: VIDEOS.v4.src,
    poster: VIDEOS.v4.poster,
    alt: "Video evento",
    category: "Eventos",
  },
  {
    type: "image",
    src: IMAGES.grupo1,
    alt: "Grupo",
    tall: false,
    wide: true,
    category: "Eventos",
  },
  {
    type: "image",
    src: IMAGES.grupo2,
    alt: "Grupo 2",
    wide: true,
    tall: false,
    category: "Talleres",
  },
  { type: "image", src: IMAGES.diploma, alt: "Diploma", category: "Eventos" },
  {
    type: "image",
    src: IMAGES.hitDance1,
    alt: "Hit Dance",
    category: "Talleres",
  },
  { type: "image", src: IMAGES.grupo4, alt: "Grupo 4", category: "Eventos" },
  {
    type: "video",
    src: VIDEOS.v5.src,
    poster: VIDEOS.v5.poster,
    alt: "Video 5",
    category: "Cursos",
  },
  {
    type: "image",
    src: IMAGES.grupo3,
    alt: "Grupo 3",
    wide: true,
    tall: false,
    category: "Talleres",
  },
];

export const Gallery = () => {
  const [filter, setFilter] = useState("Todo");
  const [lbIdx, setLbIdx] = useState<number | null>(null);

  const filtered =
    filter === "Todo"
      ? ALL_ITEMS
      : ALL_ITEMS.filter((i) => i.category === filter);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (lbIdx === null) return;
      if (e.key === "Escape") setLbIdx(null);
      if (e.key === "ArrowRight")
        setLbIdx((i) => (i !== null ? (i + 1) % filtered.length : null));
      if (e.key === "ArrowLeft")
        setLbIdx((i) =>
          i !== null ? (i - 1 + filtered.length) % filtered.length : null
        );
    },
    [lbIdx, filtered.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const lbItem = lbIdx !== null ? filtered[lbIdx] : null;

  return (
    <section
      className="gallery-section section"
      id="gallery"
      style={{ position: "relative", zIndex: 1, isolation: "isolate" }}
    >
      <div className="container">
        <div className="sec-topbar">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Galería</span>
            </div>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              Nuestros <em>momentos</em>
            </h2>
          </div>
          {/* <button className="more-link" onClick={() => setFilter("Todo")}>
            Ver todo <span className="btn-arrow" />
          </button> */}
        </div>

        <div className="gal-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`gf${f === filter ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="gal-grid">
          {filtered.map((item, i) => (
            <div
              key={`${filter}-${i}`}
              className={`gi${item.wide ? " wide" : ""}${
                item.tall ? " tall" : ""
              }`}
              onClick={() => setLbIdx(filtered.indexOf(item))}
            >
              {item.type === "video" ? (
                <>
                  <img src={item.poster} alt={item.alt} />
                  <div className="gi-play-btn">
                    <div className="gi-play-circle">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path d="M3 2L10 6L3 10V2Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <img src={item.src} alt={item.alt} />
                  <div className="gi-hover" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox via Portal */}
      {lbItem && lbIdx !== null && (
        <Portal>
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(18,10,6,0.95)",
              animation: "fadeIn .2s",
            }}
            onClick={() => setLbIdx(null)}
          >
            <button className="lb-close" onClick={() => setLbIdx(null)}>
              <X size={18} />
            </button>
            <button
              className="lb-nav prev"
              onClick={(e) => {
                e.stopPropagation();
                setLbIdx((lbIdx - 1 + filtered.length) % filtered.length);
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="lb-content" onClick={(e) => e.stopPropagation()}>
              {lbItem.type === "video" ? (
                <video
                  key={lbItem.src}
                  className="lb-video"
                  src={lbItem.src}
                  poster={lbItem.poster}
                  controls
                  autoPlay
                />
              ) : (
                <img
                  key={lbItem.src}
                  className="lb-img"
                  src={lbItem.src}
                  alt={lbItem.alt}
                />
              )}
            </div>
            <button
              className="lb-nav next"
              onClick={(e) => {
                e.stopPropagation();
                setLbIdx((lbIdx + 1) % filtered.length);
              }}
            >
              <ChevronRight size={20} />
            </button>
            <div className="lb-dots">
              {filtered.map((_, i) => (
                <div
                  key={i}
                  className={`lb-dot${i === lbIdx ? " active" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLbIdx(i);
                  }}
                />
              ))}
            </div>
          </div>
        </Portal>
      )}
    </section>
  );
};

// import { useState, useEffect, useCallback } from "react";
// import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import { IMAGES, VIDEOS } from "../../../constants/assets";
// import { Portal } from "../../../components/Portal/Portal";

// const FILTERS = ["Todo", "Cursos", "Talleres", "Eventos"];
// type MediaItem = {
//   type: "image" | "video";
//   src: string;
//   poster?: string;
//   alt: string;
//   wide?: boolean;
//   tall?: boolean;
//   category: string;
// };

// const ALL_ITEMS: MediaItem[] = [

//  {
//     type: "video",
//     src: VIDEOS.v6.src,
//     poster: VIDEOS.v6.poster,
//     alt: "Video inductora manicurista",
//     wide: false,
//     tall:true,
//     category: "Eventos",
//   },

//   {
//     type: "video",
//     src: VIDEOS.v1.src,
//     poster: VIDEOS.v1.poster,
//     alt: "Video clase",
//     wide: true,
//     tall:true,
//     category: "Cursos",
//   },
//   { type: "image", src: IMAGES.escuela, alt: "Escuela", category: "Cursos" },
//   {
//     type: "video",
//     src: VIDEOS.v3.src,
//     poster: VIDEOS.v3.poster,
//     alt: "Video taller",
//     category: "Talleres",
//   },
//   {
//     type: "image",
//     src: IMAGES.grupo1,
//     alt: "Grupo",
//     tall: true,
//     category: "Eventos",
//   },
//   { type: "image", src: IMAGES.clase, alt: "Clase", category: "Cursos" },
//   {
//     type: "video",
//     src: VIDEOS.v4.src,
//     poster: VIDEOS.v4.poster,
//     alt: "Video evento",
//     category: "Eventos",
//   },
//   { type: "image", src: IMAGES.grupo2, alt: "Grupo 2", category: "Talleres" },
//   { type: "image", src: IMAGES.diploma, alt: "Diploma", category: "Eventos" },
//   {
//     type: "image",
//     src: IMAGES.hitDance1,
//     alt: "Hit Dance",
//     category: "Talleres",
//   },
//   { type: "image", src: IMAGES.grupo3, alt: "Grupo 3", category: "Talleres" },
//   { type: "image", src: IMAGES.grupo4, alt: "Grupo 4", category: "Eventos" },
//   {
//     type: "video",
//     src: VIDEOS.v5.src,
//     poster: VIDEOS.v5.poster,
//     alt: "Video 5",
//     category: "Cursos",
//   },
// ];
// const PREVIEW_COUNT = 6;

// export const Gallery = () => {
//   const [filter, setFilter] = useState("Todo");
//   const [showAll, setShowAll] = useState(false);
//   const [lbIdx, setLbIdx] = useState<number | null>(null);

//   const filtered =
//     filter === "Todo"
//       ? ALL_ITEMS
//       : ALL_ITEMS.filter((i) => i.category === filter);
//   const visible = showAll ? filtered : filtered.slice(0, PREVIEW_COUNT);

//   useEffect(() => {
//     setShowAll(false);
//   }, [filter]);

//   const handleKey = useCallback(
//     (e: KeyboardEvent) => {
//       if (lbIdx === null) return;
//       if (e.key === "Escape") setLbIdx(null);
//       if (e.key === "ArrowRight")
//         setLbIdx((i) => (i !== null ? (i + 1) % filtered.length : null));
//       if (e.key === "ArrowLeft")
//         setLbIdx((i) =>
//           i !== null ? (i - 1 + filtered.length) % filtered.length : null
//         );
//     },
//     [lbIdx, filtered.length]
//   );

//   useEffect(() => {
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [handleKey]);

//   const lbItem = lbIdx !== null ? filtered[lbIdx] : null;

//   return (
//     <section
//       className="gallery-section section"
//       id="gallery"
//       style={{ position: "relative", zIndex: 1, isolation: "isolate" }}
//     >
//       <div className="container">
//         <div className="sec-topbar">
//           <div>
//             <div className="eyebrow">
//               <span className="eyebrow-line" />
//               <span className="eyebrow-text">Galería</span>
//             </div>
//             <h2 className="section-title" style={{ marginBottom: 0 }}>
//               Nuestros <em>momentos</em>
//             </h2>
//           </div>
//           <button
//             className="more-link"
//             onClick={() => {
//               setShowAll(true);
//               setFilter("Todo");
//             }}
//           >
//             Ver todo <span className="btn-arrow" />
//           </button>
//         </div>

//         <div className="gal-filters">
//           {FILTERS.map((f) => (
//             <button
//               key={f}
//               className={`gf${f === filter ? " active" : ""}`}
//               onClick={() => setFilter(f)}
//             >
//               {f}
//             </button>
//           ))}
//         </div>

//         <div className="gal-grid">
//           {visible.map((item, i) => (
//             <div
//               key={`${filter}-${i}`}
//               className={`gi${item.wide && i < 2 ? " wide" : ""}${
//                 item.tall  ? " tall" : ""
//               }`}
//               onClick={() => setLbIdx(filtered.indexOf(item))}
//             >
//               {item.type === "video" ? (
//                 <>
//                   <img src={item.poster} alt={item.alt} />
//                   <div className="gi-play-btn">
//                     <div className="gi-play-circle">
//                       <svg
//                         width="12"
//                         height="12"
//                         viewBox="0 0 12 12"
//                         fill="none"
//                       >
//                         <path d="M3 2L10 6L3 10V2Z" fill="white" />
//                       </svg>
//                     </div>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <img src={item.src} alt={item.alt} />
//                   <div className="gi-hover" />
//                 </>
//               )}
//             </div>
//           ))}
//         </div>

//         {!showAll && filtered.length > PREVIEW_COUNT && (
//           <div
//             style={{ display: "flex", justifyContent: "center", marginTop: 28 }}
//           >
//             <button
//               className="btn btn-outline"
//               onClick={() => setShowAll(true)}
//             >
//               Ver galería completa ({filtered.length} elementos){" "}
//               <span className="btn-arrow" />
//             </button>
//           </div>
//         )}
//         {showAll && filtered.length > PREVIEW_COUNT && (
//           <div
//             style={{ display: "flex", justifyContent: "center", marginTop: 28 }}
//           >
//             <button
//               className="btn btn-outline"
//               onClick={() => setShowAll(false)}
//             >
//               Ver menos
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Lightbox via Portal */}
//       {lbItem && lbIdx !== null && (
//         <Portal>
//           <div
//             style={{
//               position: "fixed",
//               inset: 0,
//               zIndex: 99999,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               background: "rgba(18,10,6,0.95)",
//               animation: "fadeIn .2s",
//             }}
//             onClick={() => setLbIdx(null)}
//           >
//             <button className="lb-close" onClick={() => setLbIdx(null)}>
//               <X size={18} />
//             </button>
//             <button
//               className="lb-nav prev"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setLbIdx((lbIdx - 1 + filtered.length) % filtered.length);
//               }}
//             >
//               <ChevronLeft size={20} />
//             </button>
//             <div className="lb-content" onClick={(e) => e.stopPropagation()}>
//               {lbItem.type === "video" ? (
//                 <video
//                   key={lbItem.src}
//                   className="lb-video"
//                   src={lbItem.src}
//                   poster={lbItem.poster}
//                   controls
//                   autoPlay
//                 />
//               ) : (
//                 <img
//                   key={lbItem.src}
//                   className="lb-img"
//                   src={lbItem.src}
//                   alt={lbItem.alt}
//                 />
//               )}
//             </div>
//             <button
//               className="lb-nav next"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setLbIdx((lbIdx + 1) % filtered.length);
//               }}
//             >
//               <ChevronRight size={20} />
//             </button>
//             {/* <div className="lb-counter">
//               {lbIdx + 1} / {filtered.length}
//             </div> */}
//             <div className="lb-dots">
//               {filtered.map((_, i) => (
//                 <div
//                   key={i}
//                   className={`lb-dot${i === lbIdx ? " active" : ""}`}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     setLbIdx(i);
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </Portal>
//       )}
//     </section>
//   );
// };
