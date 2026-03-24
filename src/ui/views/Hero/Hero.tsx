// import { useState, useEffect, useCallback, useRef } from "react";
// import { ChevronLeft, ChevronRight, Search, User, X } from "lucide-react";
// import { IMAGES } from "../../../constants/assets";

// const SLIDES = [
//   {
//     id: 1,
//     image: IMAGES.girl,
//     label: "Estética",
//     title: "Cursos De",
//     highlight: "Estética",
//     subtitle: "Realza tu belleza natural",
//     desc: "Aprende técnicas profesionales de maquillaje, cuidado facial y manicura, o disfruta de tratamientos especializados. ¡Cuida de ti misma(o) con servicios que potencian tu confianza!",
//     bgColor: "rgba(80,38,18,0.90)",
//     gradient:
//       "linear-gradient(135deg,#5C2E1A 0%,#8A4A35 35%,#B07060 65%,#C49080 100%)",
//   },
//   {
//     id: 2,
//     image: IMAGES.yoga,
//     label: "Bienestar",
//     title: "Cursos Y Talleres De ",
//     highlight: "Masoterapia",
//     subtitle: "bienestar integral",
//     desc: "Terapias manuales y alternativas diseñadas para aliviar el estrés, reducir dolores y equilibrar tu cuerpo. Desde masajes hasta terapias con imanes, encuentra tu camino hacia el bienestar integral.",
//     bgColor: "rgba(20,42,52,0.90)",
//     gradient:
//       "linear-gradient(135deg,#1A2E38 0%,#2A5060 35%,#407A80 65%,#5A9090 100%)",
//   },
//   {
//     id: 3,
//     image: IMAGES.hairdresser,
//     label: "Peluquería",
//     title: "Cursos De ",
//     highlight: "Peluquería Y Barbería",
//     subtitle: "profesional",
//     desc: "Desde cortes modernos hasta tratamientos capilares rejuvenecedores. Domina técnicas de peinado, coloración o elaboración de productos naturales para un cabello saludable.",
//     bgColor: "rgba(20,20,40,0.90)",
//     gradient:
//       "linear-gradient(135deg,#1A1A2E 0%,#2A2A50 35%,#3A4070 65%,#506090 100%)",
//   },
// ];

// const CHIPS = [
//   "Estética",
//   "Peluquería",
//   "Masoterapia",
//   "Barbería",
//   "Gastronomía",
// ];
// const INTERVAL = 6000;
// const N = SLIDES.length;
// const mod = (n: number, m: number) => ((n % m) + m) % m;

// const CFG = [
//   { w: 160, h: 130, sc: 1.0, op: 1.0 },
//   { w: 148, h: 120, sc: 0.94, op: 0.85 },
//   { w: 92, h: 92, sc: 0.88, op: 0.68 },
// ];
// const GAP = 10;
// const xOf = (slot: number): number =>
//   ([0, CFG[0].w + GAP, CFG[0].w + GAP + CFG[1].w + GAP] as const)[slot] ?? 0;
// const TOTAL_W = CFG[0].w + GAP + CFG[1].w + GAP + CFG[2].w;

// const DUR_MS = 380;
// const EASE = "cubic-bezier(0.4,0,0.2,1)";
// const T = (ms = DUR_MS) =>
//   `left ${ms}ms ${EASE}, width ${ms}ms ${EASE}, height ${ms}ms ${EASE}, opacity ${ms}ms ${EASE}, transform ${ms}ms ${EASE}`;

// // ─── Refs to sub-elements inside each card node ───────────────────────────────
// // Each card has: a thumb div (background-image) + a label div (p.label + p.highlight)
// // We need to update these imperatively when content changes mid-animation.
// interface CardSubRefs {
//   thumb: HTMLDivElement | null;
//   label: HTMLParagraphElement | null;
//   sub: HTMLParagraphElement | null;
// }

// interface Props {
//   onMenuOpen: () => void;
// }

// export const Hero = ({ onMenuOpen }: Props) => {
//   const stepRef = useRef(0);
//   const lockRef = useRef(false);
//   const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
//   // Sub-element refs for imperative content updates
//   const subRefs = useRef<CardSubRefs[]>([
//     { thumb: null, label: null, sub: null },
//     { thumb: null, label: null, sub: null },
//     { thumb: null, label: null, sub: null },
//   ]);

//   const [step, setStep] = useState(0);
//   const [progress, setProgress] = useState(0);

//   const nodeAtRef = useRef<[number, number, number]>([0, 1, 2]);
//   const [nodeAt, _setNodeAt] = useState<[number, number, number]>([0, 1, 2]);
//   const setNodeAt = (v: [number, number, number]) => {
//     nodeAtRef.current = v;
//     _setNodeAt(v);
//   };

//   const slideOfRef = useRef<[number, number, number]>([
//     0,
//     mod(1, N),
//     mod(2, N),
//   ]);
//   const [slideOf, _setSlideOf] = useState<[number, number, number]>([
//     0,
//     mod(1, N),
//     mod(2, N),
//   ]);
//   const setSlideOf = (v: [number, number, number]) => {
//     slideOfRef.current = v;
//     _setSlideOf(v);
//   };

//   const current = mod(step, N);
//   const slide = SLIDES[current];

//   const setStyle = (nodeIdx: number, styles: Partial<CSSStyleDeclaration>) => {
//     const el = cardRefs.current[nodeIdx];
//     if (el) Object.assign(el.style, styles);
//   };

//   const snap = (nodeIdx: number, slot: number) => {
//     const c = CFG[slot];
//     setStyle(nodeIdx, {
//       transition: "none",
//       left: `${xOf(slot)}px`,
//       width: `${c.w}px`,
//       height: `${c.h}px`,
//       opacity: `${c.op}`,
//       transform: `scale(${c.sc})`,
//     });
//   };

//   // Actualiza el contenido visual de un nodo DOM directamente (sin React)
//   const updateCardContent = (nodeIdx: number, slideIdx: number) => {
//     const s = SLIDES[slideIdx];
//     const card = cardRefs.current[nodeIdx];
//     const sr = subRefs.current[nodeIdx];
//     if (!card) return;

//     // background color del card
//     card.style.background = s.bgColor;

//     // thumbnail background-image
//     if (sr.thumb) {
//       sr.thumb.style.backgroundImage = `url(${s.image})`;
//     }

//     // label texts
//     if (sr.label) sr.label.textContent = s.label;
//     if (sr.sub) sr.sub.textContent = s.highlight;
//   };

//   // ─── goTo(targetSlide) ────────────────────────────────────────────────────
//   const goTo = useCallback((targetSlide: number) => {
//     if (lockRef.current) return;
//     lockRef.current = true;

//     const [n0, n1, n2] = nodeAtRef.current;

//     const curStep = stepRef.current;
//     const curSlide = mod(curStep, N);
//     const stepsAhead = mod(targetSlide - curSlide, N);
//     if (stepsAhead === 0) {
//       lockRef.current = false;
//       return;
//     }
//     const nextStep = curStep + stepsAhead;

//     // Nuevos slides para cada nodo
//     const s0 = mod(targetSlide + 2, N); // n0 → slot2
//     const s1 = mod(targetSlide, N); // n1 → slot0 (current)
//     const s2 = mod(targetSlide + 1, N); // n2 → slot1

//     // 1. Actualizar contenido en el DOM ANTES del rAF
//     //    n0: entra desde la derecha → actualizar ahora (invisible hasta que aparezca)
//     //    n1: pasa de slot1 → slot0. Si su contenido actual ya ES s1, no hace falta.
//     //        Si no (ej. goPrev donde s1 ≠ slideOf[n1]), actualizamos.
//     //    n2: pasa de slot2 → slot1. Igual.
//     updateCardContent(n0, s0);
//     if (slideOfRef.current[n1] !== s1) updateCardContent(n1, s1);
//     if (slideOfRef.current[n2] !== s2) updateCardContent(n2, s2);

//     // 2. Actualizar estado React (para sincronizar render)
//     const newSlideOf: [number, number, number] = [...slideOfRef.current];
//     newSlideOf[n0] = s0;
//     newSlideOf[n1] = s1;
//     newSlideOf[n2] = s2;
//     setSlideOf(newSlideOf);

//     // 3. Animaciones
//     requestAnimationFrame(() => {
//       // EXIT: n0 sale por la izquierda
//       setStyle(n0, {
//         transition: T(),
//         left: `${-(CFG[0].w + GAP * 3)}px`,
//         opacity: "0",
//         transform: `scale(0.82)`,
//       });

//       // MOVE: n1 → slot0
//       setStyle(n1, {
//         transition: T(),
//         left: `${xOf(0)}px`,
//         width: `${CFG[0].w}px`,
//         height: `${CFG[0].h}px`,
//         opacity: `${CFG[0].op}`,
//         transform: `scale(${CFG[0].sc})`,
//       });

//       // MOVE: n2 → slot1
//       setStyle(n2, {
//         transition: T(),
//         left: `${xOf(1)}px`,
//         width: `${CFG[1].w}px`,
//         height: `${CFG[1].h}px`,
//         opacity: `${CFG[1].op}`,
//         transform: `scale(${CFG[1].sc})`,
//       });

//       // ENTER: n0 entra desde la derecha
//       setTimeout(() => {
//         setStyle(n0, {
//           transition: "none",
//           left: `${TOTAL_W + GAP * 2}px`,
//           width: `${CFG[2].w}px`,
//           height: `${CFG[2].h}px`,
//           opacity: "0",
//           transform: `scale(${CFG[2].sc})`,
//         });
//         requestAnimationFrame(() => {
//           setStyle(n0, {
//             transition: T(),
//             left: `${xOf(2)}px`,
//             opacity: `${CFG[2].op}`,
//           });
//         });
//       }, 80);
//     });

//     // 4. Commit React state y snap final
//     setTimeout(() => {
//       stepRef.current = nextStep;
//       setNodeAt([n1, n2, n0]);
//       setStep(nextStep);
//       setProgress(0);

//       requestAnimationFrame(() => {
//         snap(n1, 0);
//         snap(n2, 1);
//         snap(n0, 2);
//         setTimeout(() => {
//           lockRef.current = false;
//         }, 40);
//       });
//     }, DUR_MS + 80 + 60);
//   }, []);

//   const goNext = useCallback(() => {
//     goTo(mod(stepRef.current + 1, N));
//   }, [goTo]);

//   const goPrev = useCallback(() => {
//     goTo(mod(stepRef.current - 1, N));
//   }, [goTo]);

//   const handleCardClick = useCallback(
//     (nodeIdx: number) => {
//       if (lockRef.current) return;
//       const slot = nodeAtRef.current.indexOf(nodeIdx) as 0 | 1 | 2;
//       if (slot === 0) return;
//       goTo(slideOfRef.current[nodeIdx]);
//     },
//     [goTo]
//   );

//   // ─── Auto-advance ─────────────────────────────────────────────────────────
//   useEffect(() => {
//     setProgress(0);
//     if (timerRef.current) clearInterval(timerRef.current);
//     const tick = 60;
//     const inc = (tick / INTERVAL) * 100;
//     timerRef.current = setInterval(() => {
//       setProgress((p) => {
//         if (p >= 100) {
//           goNext();
//           return 0;
//         }
//         return p + inc;
//       });
//     }, tick);
//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, [step, goNext]);

//   return (
//     <section className="hero" id="home">
//       <div className="hero-bg-wrap">
//         <div className="hero-gradient" style={{ background: slide.gradient }} />
//         <div
//           key={`bg-${step}`}
//           className="hero-person hero-person-in"
//           style={{ backgroundImage: `url(${slide.image})` }}
//         />
//         <div className="hero-overlay-lr" />
//         <div className="hero-overlay-bt" />
//       </div>

//       <div className="hero-progress">
//         <div className="hero-progress-fill" style={{ width: `${progress}%` }} />
//       </div>

//       <nav className="navbar">
//         <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
//           <button className="nav-ham" onClick={onMenuOpen}>
//             <span />
//             <span />
//             <span />
//           </button>
//           <div className="nav-pills">
//             {[
//               { l: "Inicio", h: "#home" },
//               { l: "Cursos", h: "#courses" },
//               { l: "Sobre nosotros", h: "#about" },
//             ].map((n, i) => (
//               <a
//                 key={n.l}
//                 href={n.h}
//                 className={`nav-pill${i === 0 ? " active" : ""}`}
//               >
//                 {n.l}
//               </a>
//             ))}
//           </div>
//         </div>
//         {/* <div className="nav-brand">
//           <span>FIBE</span>PECH
//         </div> */}
//         <div className="nav-brand">
//           <img
//             src="https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//logo_192x192.png"
//             alt="Logo"
//             style={{ height: 90, width: "auto", objectFit: "contain" }}
//           />
//         </div>
//         <div className="nav-right">
//           <button
//             className="nav-ico"
//             onClick={() =>
//               document.querySelector<HTMLInputElement>(".cinp")?.focus()
//             }
//           >
//             <Search size={14} color="rgba(255,255,255,0.75)" />
//           </button>
//           <button
//             className="nav-ico"
//             onClick={() =>
//               document
//                 .getElementById("contact")
//                 ?.scrollIntoView({ behavior: "smooth" })
//             }
//           >
//             <User size={14} color="rgba(255,255,255,0.75)" />
//           </button>
//           <a
//             href="#contact"
//             className="btn btn-fill"
//             style={{ borderRadius: 6, marginLeft: 4 }}
//           >
//             Más información
//           </a>
//         </div>
//       </nav>

//       <div className="hero-body">
//         <div style={{ maxWidth: 600 }}>
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 8,
//               background: "rgba(160,97,74,0.2)",
//               border: "1px solid rgba(196,132,110,0.35)",
//               padding: "6px 14px",
//               borderRadius: 20,
//               marginBottom: 20,
//             }}
//           >
//             <span
//               style={{
//                 width: 6,
//                 height: 6,
//                 borderRadius: "50%",
//                 background: "var(--terra-l)",
//                 display: "block",
//               }}
//             />
//             <span
//               style={{
//                 fontSize: 10,
//                 letterSpacing: "0.18em",
//                 textTransform: "uppercase",
//                 color: "var(--terra-l)",
//               }}
//             >
//               Formación Profesional · {slide.label}
//             </span>
//           </div>
//           <h1 className="hero-title">
//             {slide.title} <em>{slide.highlight}</em>
//             <br />
//             {slide.subtitle}
//           </h1>
//           <p className="hero-desc">{slide.desc}</p>
//         </div>

//         <button
//           className="gal-btn"
//           style={{ top: "42%" }}
//           onClick={() =>
//             document
//               .getElementById("gallery")
//               ?.scrollIntoView({ behavior: "smooth" })
//           }
//         >
//           <div className="gal-play">
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path d="M5 3.5L13 8L5 12.5V3.5Z" fill="white" />
//             </svg>
//           </div>
//           <span className="gal-play-lbl">
//             Galería
//             <br />
//             de videos
//           </span>
//         </button>

//         <div className="hero-bottom">
//           <div className="chips-col">
//             <div className="chips-row">
//               {CHIPS.slice(0, 2).map((c) => (
//                 <a key={c} href="#courses" className="chip">
//                   <span className="chip-check">
//                     <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
//                       <path
//                         d="M1 3.5L2.8 5.2L6 1.5"
//                         stroke="#E8C09A"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   {c}
//                 </a>
//               ))}
//             </div>
//             <div className="chips-row">
//               {CHIPS.slice(2).map((c) => (
//                 <a key={c} href="#courses" className="chip">
//                   <span className="chip-check">
//                     <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
//                       <path
//                         d="M1 3.5L2.8 5.2L6 1.5"
//                         stroke="#E8C09A"
//                         strokeWidth="1.2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   {c}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div
//             style={{
//               position: "relative",
//               width: TOTAL_W,
//               height: CFG[0].h + 20,
//               flexShrink: 0,
//               overflow: "hidden",
//             }}
//           >
//             {([0, 1, 2] as const).map((nodeIdx) => {
//               const slot = nodeAt.indexOf(nodeIdx) as 0 | 1 | 2;
//               const s = SLIDES[slideOf[nodeIdx]];
//               const cfg = CFG[slot] ?? CFG[2];

//               return (
//                 <div
//                   key={nodeIdx}
//                   ref={(el) => {
//                     cardRefs.current[nodeIdx] = el;
//                   }}
//                   onClick={() => handleCardClick(nodeIdx)}
//                   style={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: `${xOf(slot)}px`,
//                     width: `${cfg.w}px`,
//                     height: `${cfg.h}px`,
//                     opacity: cfg.op,
//                     transform: `scale(${cfg.sc})`,
//                     transformOrigin: "bottom left",
//                     background: s.bgColor,
//                     backdropFilter: "blur(10px)",
//                     WebkitBackdropFilter: "blur(10px)",
//                     border: "1px solid rgba(255,255,255,0.14)",
//                     borderRadius: 14,
//                     cursor: slot === 0 ? "default" : "pointer",
//                     overflow: "hidden",
//                     display: "flex",
//                     flexDirection: "column",
//                     boxShadow: "0 4px 20px rgba(18,10,6,0.3)",
//                   }}
//                 >
//                   {/* Thumbnail — ref para actualización imperativa */}
//                   <div
//                     ref={(el) => {
//                       subRefs.current[nodeIdx].thumb = el;
//                     }}
//                     style={{
//                       flex: "1 1 auto",
//                       backgroundImage: `url(${s.image})`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center top",
//                       position: "relative",
//                       minHeight: 0,
//                     }}
//                   >
//                     {slot > 0 && (
//                       <div className="hpc-arr">
//                         <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
//                           <path
//                             d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5"
//                             stroke="#fff"
//                             strokeWidth="1.1"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>
//                       </div>
//                     )}
//                   </div>

//                   {/* Label — refs para actualización imperativa */}
//                   <div
//                     style={{
//                       flexShrink: 0,
//                       padding: "8px 11px 10px",
//                       position: "absolute",
//                       bottom: 0,
//                     }}
//                   >
//                     <p
//                       ref={(el) => {
//                         subRefs.current[nodeIdx].label = el;
//                       }}
//                       style={{
//                         color: "#fff",
//                         fontSize: 11,
//                         fontWeight: 500,
//                         marginBottom: 2,
//                       }}
//                     >
//                       {s.label}
//                     </p>
//                     <p
//                       ref={(el) => {
//                         subRefs.current[nodeIdx].sub = el;
//                       }}
//                       style={{
//                         color: "rgba(255,255,255,0.55)",
//                         fontSize: 9,
//                         fontStyle: "italic",
//                       }}
//                     >
//                       {s.highlight}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="slide-ctl">
//             <span className="slide-num active">0{current + 1}</span>
//             <div className="slide-track">
//               <div
//                 className="slide-fill"
//                 style={{ width: `${((current + 1) / N) * 100}%` }}
//               />
//             </div>
//             <span className="slide-num">0{N}</span>
//             <div style={{ display: "flex", gap: 7 }}>
//               <button className="slide-btn" onClick={goPrev}>
//                 <ChevronLeft size={14} />
//               </button>
//               <button className="slide-btn active" onClick={goNext}>
//                 <ChevronRight size={14} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export const MobileMenu = ({ onClose }: { onClose: () => void }) => {
//   const links = [
//     { l: "Inicio", h: "#home" },
//     { l: "Cursos", h: "#courses" },
//     { l: "Sobre nosotros", h: "#about" },
//     { l: "Galería", h: "#gallery" },
//     { l: "Contacto", h: "#contact" },
//   ];
//   return (
//     <div className="mobile-menu" onClick={onClose}>
//       <div className="mobile-menu-backdrop" />
//       <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
//         <button className="mobile-menu-close" onClick={onClose}>
//           <X size={16} />
//         </button>
//         {/* <div className="mobile-menu-brand">
//           <span>FIBE</span>PECH
//         </div> */}
// <div className="mobile-menu-brand">
//   <img
//     src="https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//logo_192x192.png"
//     alt="Logo"
//     style={{ height: 44, width: "auto", objectFit: "contain" }}
//   />
// </div>
//         {links.map((n) => (
//           <a
//             key={n.l}
//             href={n.h}
//             className="mobile-menu-link"
//             onClick={onClose}
//           >
//             {n.l}
//           </a>
//         ))}
//         <a href="#contact" className="mobile-menu-cta" onClick={onClose}>
//           Más información
//         </a>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Search, User, X } from "lucide-react";
import { IMAGES } from "../../../constants/assets";
import { COURSES } from "../Services/constants";

const SLIDES = [
  {
    id: 1,
    image: IMAGES.girl,
    label: "Estética",
    title: "Cursos De ",
    highlight: "Estética",
    subtitle: "En FIBEPECH",
    desc: "Aprende técnicas profesionales de maquillaje, cuidado facial y manicura, o disfruta de tratamientos especializados. ¡Cuida de ti misma(o) con servicios que potencian tu confianza!",
    bgColor: "rgba(80,38,18,0.90)",
    gradient:
      "linear-gradient(135deg,#5C2E1A 0%,#8A4A35 35%,#B07060 65%,#C49080 100%)",
  },
  {
    id: 2,
    image: IMAGES.yoga,
    label: "Bienestar",
    title: "Cursos Y Talleres De ",
    highlight: "Masoterapia y Bienestar",
    // subtitle: "y bienestar integral",
    desc: "Terapias manuales y alternativas diseñadas para aliviar el estrés, reducir dolores y equilibrar tu cuerpo. Desde masajes hasta terapias con imanes, encuentra tu camino hacia el bienestar integral.",
    bgColor: "rgba(20,42,52,0.90)",
    gradient:
      "linear-gradient(135deg,#1A2E38 0%,#2A5060 35%,#407A80 65%,#5A9090 100%)",
  },
  {
    id: 3,
    image: IMAGES.hairdresser,
    label: "Peluquería",
    title: "Cursos De ",
    highlight: "Peluquería Y Barbería",
    subtitle: "Profesional",
    desc: "Desde cortes modernos hasta tratamientos capilares rejuvenecedores. Domina técnicas de peinado, coloración o elaboración de productos naturales para un cabello saludable.",
    bgColor: "rgba(20,20,40,0.90)",
    gradient:
      "linear-gradient(135deg,#1A1A2E 0%,#2A2A50 35%,#3A4070 65%,#506090 100%)",
  },
];

// const CHIPS = [
//   "Estética",
//   "Peluquería",
//   "Masoterapia",
//   "Barbería",
//   "Gastronomía",
// ];
const INTERVAL = 10000;
const N = SLIDES.length;
const mod = (n: number, m: number) => ((n % m) + m) % m;

const CFG = [
  { w: 160, h: 130, sc: 1.0, op: 1.0 },
  { w: 148, h: 120, sc: 0.94, op: 0.85 },
  { w: 92, h: 92, sc: 0.88, op: 0.68 },
];
const GAP = 10;
const xOf = (slot: number): number =>
  ([0, CFG[0].w + GAP, CFG[0].w + GAP + CFG[1].w + GAP] as const)[slot] ?? 0;
const TOTAL_W = CFG[0].w + GAP + CFG[1].w + GAP + CFG[2].w;

const DUR_MS = 380;
const EASE = "cubic-bezier(0.4,0,0.2,1)";
const T = (ms = DUR_MS) =>
  `left ${ms}ms ${EASE}, width ${ms}ms ${EASE}, height ${ms}ms ${EASE}, opacity ${ms}ms ${EASE}, transform ${ms}ms ${EASE}`;

interface CardSubRefs {
  thumb: HTMLDivElement | null;
  label: HTMLParagraphElement | null;
  sub: HTMLParagraphElement | null;
}

interface Props {
  onMenuOpen: () => void;
}

export const Hero = ({ onMenuOpen }: Props) => {
  const stepRef = useRef(0);
  const lockRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const subRefs = useRef<CardSubRefs[]>([
    { thumb: null, label: null, sub: null },
    { thumb: null, label: null, sub: null },
    { thumb: null, label: null, sub: null },
  ]);

  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const nodeAtRef = useRef<[number, number, number]>([0, 1, 2]);
  const [nodeAt, _setNodeAt] = useState<[number, number, number]>([0, 1, 2]);
  const setNodeAt = (v: [number, number, number]) => {
    nodeAtRef.current = v;
    _setNodeAt(v);
  };

  const slideOfRef = useRef<[number, number, number]>([
    0,
    mod(1, N),
    mod(2, N),
  ]);
  const [slideOf, _setSlideOf] = useState<[number, number, number]>([
    0,
    mod(1, N),
    mod(2, N),
  ]);
  const setSlideOf = (v: [number, number, number]) => {
    slideOfRef.current = v;
    _setSlideOf(v);
  };

  const current = mod(step, N);
  const slide = SLIDES[current];

  const setStyle = (nodeIdx: number, styles: Partial<CSSStyleDeclaration>) => {
    const el = cardRefs.current[nodeIdx];
    if (el) Object.assign(el.style, styles);
  };

  const snap = (nodeIdx: number, slot: number) => {
    const c = CFG[slot];
    setStyle(nodeIdx, {
      transition: "none",
      left: `${xOf(slot)}px`,
      width: `${c.w}px`,
      height: `${c.h}px`,
      opacity: `${c.op}`,
      transform: `scale(${c.sc})`,
    });
  };

  const updateCardContent = (nodeIdx: number, slideIdx: number) => {
    const s = SLIDES[slideIdx];
    const card = cardRefs.current[nodeIdx];
    const sr = subRefs.current[nodeIdx];
    if (!card) return;
    card.style.background = s.bgColor;
    if (sr.thumb) sr.thumb.style.backgroundImage = `url(${s.image})`;
    if (sr.label) sr.label.textContent = s.label;
    if (sr.sub) sr.sub.textContent = s.highlight;
  };

  // ─── goTo(targetSlide, dir) ───────────────────────────────────────────────
  // dir = "fwd"  → current exits LEFT,  new enters from RIGHT  (default / goNext)
  // dir = "bwd"  → current exits RIGHT, new enters from LEFT   (goPrev)
  //
  // FORWARD layout after transition:  [n1→slot0] [n2→slot1] [n0→slot2]
  // BACKWARD layout after transition: [n0→slot0] [n1→slot1] [n2→slot2]
  //   where the "recycled" node comes from the opposite side.
  //
  // For backward we reverse who exits, who moves, who enters:
  //   n2 (slot2, rightmost) → exits RIGHT
  //   n1 (slot1) → slides right to slot2
  //   n0 (slot0, current) → slides right to slot1... wait, that's wrong.
  //
  // Actually for backward the correct physical mapping is:
  //   The card entering = goes into slot0 (becomes new current)
  //   It comes from the LEFT (off-screen left)
  //   The card exiting  = was at slot0, slides out to the RIGHT
  //   The other two shift right one slot each:
  //     old slot1 → slot2
  //     old slot0 → exits right (off-screen)
  //   The entering card takes slot0.
  //
  // New slot assignment after backward:
  //   slot0 = targetSlide         ← new node entering from left
  //   slot1 = old slot0 content   ← n0 shifts right
  //   slot2 = old slot1 content   ← n1 shifts right
  //   n2 (old slot2) → exits right AND gets recycled with new preview content
  //
  // Wait — but we only have 3 nodes. Let's think in terms of nodes:
  //   [n0=slot0, n1=slot1, n2=slot2]
  //
  // BACKWARD:
  //   n2 exits right  (was slot2, goes off-screen right)
  //   n1 moves slot1→slot2
  //   n0 moves slot0→slot1
  //   n2 (recycled) enters from left → becomes slot0 (new current)
  //
  // After: nodeAt = [n2, n0, n1]
  //   n2 = slot0 = targetSlide
  //   n0 = slot1 = targetSlide+1
  //   n1 = slot2 = targetSlide+2

  const goTo = useCallback(
    (targetSlide: number, dir: "fwd" | "bwd" = "fwd") => {
      if (lockRef.current) return;
      lockRef.current = true;

      const [n0, n1, n2] = nodeAtRef.current;

      const curStep = stepRef.current;
      const curSlide = mod(curStep, N);
      const stepsAhead = mod(targetSlide - curSlide, N);
      if (stepsAhead === 0) {
        lockRef.current = false;
        return;
      }
      const nextStep = curStep + stepsAhead;

      if (dir === "fwd") {
        // ── FORWARD ──────────────────────────────────────────────────────────
        // n0 exits left, n1→slot0, n2→slot1, n0 recycled→slot2 enters from right
        const s0 = mod(targetSlide + 2, N); // n0 recycles to slot2
        const s1 = mod(targetSlide, N); // n1 becomes slot0 (current)
        const s2 = mod(targetSlide + 1, N); // n2 becomes slot1

        updateCardContent(n0, s0);
        if (slideOfRef.current[n1] !== s1) updateCardContent(n1, s1);
        if (slideOfRef.current[n2] !== s2) updateCardContent(n2, s2);

        const newSlideOf: [number, number, number] = [...slideOfRef.current];
        newSlideOf[n0] = s0;
        newSlideOf[n1] = s1;
        newSlideOf[n2] = s2;
        setSlideOf(newSlideOf);

        requestAnimationFrame(() => {
          // n0 exits left
          setStyle(n0, {
            transition: T(),
            left: `${-(CFG[0].w + GAP * 3)}px`,
            opacity: "0",
            transform: `scale(0.82)`,
          });
          // n1 → slot0
          setStyle(n1, {
            transition: T(),
            left: `${xOf(0)}px`,
            width: `${CFG[0].w}px`,
            height: `${CFG[0].h}px`,
            opacity: `${CFG[0].op}`,
            transform: `scale(${CFG[0].sc})`,
          });
          // n2 → slot1
          setStyle(n2, {
            transition: T(),
            left: `${xOf(1)}px`,
            width: `${CFG[1].w}px`,
            height: `${CFG[1].h}px`,
            opacity: `${CFG[1].op}`,
            transform: `scale(${CFG[1].sc})`,
          });
          // n0 enters from right → slot2
          setTimeout(() => {
            setStyle(n0, {
              transition: "none",
              left: `${TOTAL_W + GAP * 2}px`,
              width: `${CFG[2].w}px`,
              height: `${CFG[2].h}px`,
              opacity: "0",
              transform: `scale(${CFG[2].sc})`,
            });
            requestAnimationFrame(() => {
              setStyle(n0, {
                transition: T(),
                left: `${xOf(2)}px`,
                opacity: `${CFG[2].op}`,
              });
            });
          }, 80);
        });

        setTimeout(() => {
          stepRef.current = nextStep;
          setNodeAt([n1, n2, n0]);
          setStep(nextStep);
          setProgress(0);
          requestAnimationFrame(() => {
            snap(n1, 0);
            snap(n2, 1);
            snap(n0, 2);
            setTimeout(() => {
              lockRef.current = false;
            }, 40);
          });
        }, DUR_MS + 80 + 60);
      } else {
        // ── BACKWARD ─────────────────────────────────────────────────────────
        // n2 exits right, n1→slot2, n0→slot1, n2 recycled→slot0 enters from left
        const s2new = mod(targetSlide + 2, N); // n2 recycles to slot2 (preview)
        const s0new = mod(targetSlide, N); // n2 enters as slot0 (new current)
        const s1new = mod(targetSlide + 1, N); // n0 becomes slot1

        // n2 will enter from the left as the new current (slot0)
        // so we update n2's content to targetSlide
        updateCardContent(n2, s0new);
        if (slideOfRef.current[n0] !== s1new) updateCardContent(n0, s1new);
        if (slideOfRef.current[n1] !== s2new) updateCardContent(n1, s2new);

        const newSlideOf: [number, number, number] = [...slideOfRef.current];
        newSlideOf[n2] = s0new;
        newSlideOf[n0] = s1new;
        newSlideOf[n1] = s2new;
        setSlideOf(newSlideOf);

        requestAnimationFrame(() => {
          // n2 exits right
          setStyle(n2, {
            transition: T(),
            left: `${TOTAL_W + GAP * 3}px`,
            opacity: "0",
            transform: `scale(0.82)`,
          });
          // n0 (slot0) → slot1 (shrinks, moves right)
          setStyle(n0, {
            transition: T(),
            left: `${xOf(1)}px`,
            width: `${CFG[1].w}px`,
            height: `${CFG[1].h}px`,
            opacity: `${CFG[1].op}`,
            transform: `scale(${CFG[1].sc})`,
          });
          // n1 (slot1) → slot2 (shrinks, moves right)
          setStyle(n1, {
            transition: T(),
            left: `${xOf(2)}px`,
            width: `${CFG[2].w}px`,
            height: `${CFG[2].h}px`,
            opacity: `${CFG[2].op}`,
            transform: `scale(${CFG[2].sc})`,
          });
          // n2 enters from left → slot0
          setTimeout(() => {
            setStyle(n2, {
              transition: "none",
              left: `${-(CFG[0].w + GAP * 2)}px`,
              width: `${CFG[0].w}px`,
              height: `${CFG[0].h}px`,
              opacity: "0",
              transform: `scale(${CFG[0].sc})`,
            });
            requestAnimationFrame(() => {
              setStyle(n2, {
                transition: T(),
                left: `${xOf(0)}px`,
                opacity: `${CFG[0].op}`,
              });
            });
          }, 80);
        });

        setTimeout(() => {
          stepRef.current = nextStep;
          // After backward: n2=slot0, n0=slot1, n1=slot2
          setNodeAt([n2, n0, n1]);
          setStep(nextStep);
          setProgress(0);
          requestAnimationFrame(() => {
            snap(n2, 0);
            snap(n0, 1);
            snap(n1, 2);
            setTimeout(() => {
              lockRef.current = false;
            }, 40);
          });
        }, DUR_MS + 80 + 60);
      }
    },
    []
  );

  const goNext = useCallback(() => {
    goTo(mod(stepRef.current + 1, N), "fwd");
  }, [goTo]);

  const goPrev = useCallback(() => {
    goTo(mod(stepRef.current - 1, N), "bwd");
  }, [goTo]);

  // Card click always goes forward (card is always ahead of current)
  const handleCardClick = useCallback(
    (nodeIdx: number) => {
      if (lockRef.current) return;
      const slot = nodeAtRef.current.indexOf(nodeIdx) as 0 | 1 | 2;
      if (slot === 0) return;
      goTo(slideOfRef.current[nodeIdx], "fwd");
    },
    [goTo]
  );

  // ─── Auto-advance ─────────────────────────────────────────────────────────
  useEffect(() => {
    setProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);
    const tick = 60;
    const inc = (tick / INTERVAL) * 100;
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          goNext();
          return 0;
        }
        return p + inc;
      });
    }, tick);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [step, goNext]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-wrap">
        <div className="hero-gradient" style={{ background: slide.gradient }} />
        <div
          key={`bg-${step}`}
          className="hero-person hero-person-in"
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        <div className="hero-overlay-lr" />
        <div className="hero-overlay-bt" />
      </div>

      <div className="hero-progress">
        <div className="hero-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <nav className="navbar">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button className="nav-ham" onClick={onMenuOpen}>
            <span />
            <span />
            <span />
          </button>
          <div className="nav-pills">
            {[
              { l: "Inicio", h: "#home" },
              { l: "Cursos", h: "#courses" },
              { l: "Sobre nosotros", h: "#about" },
            ].map((n, i) => (
              <a
                key={n.l}
                href={n.h}
                className={`nav-pill${i === 0 ? " active" : ""}`}
              >
                {n.l}
              </a>
            ))}
          </div>
        </div>
        {/* <div className="nav-brand"><span>FIBE</span>PECH</div> */}
        <div className="nav-brand">
          <img
            src="https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//logo_192x192.png"
            alt="Logo"
            style={{ height: 90, width: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="nav-right">
          <button
            className="nav-ico"
            onClick={() =>
              document.querySelector<HTMLInputElement>(".cinp")?.focus()
            }
          >
            <Search size={14} color="rgba(255,255,255,0.75)" />
          </button>
          <button
            className="nav-ico"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <User size={14} color="rgba(255,255,255,0.75)" />
          </button>
          <a
            href="#contact"
            className="btn btn-fill"
            style={{ borderRadius: 6, marginLeft: 4 }}
          >
            Más información
          </a>
        </div>
      </nav>

      <div className="hero-body">
        <div style={{ maxWidth: 500 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(160,97,74,0.2)",
              border: "1px solid rgba(196,132,110,0.35)",
              padding: "6px 14px",
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--terra-l)",
                display: "block",
              }}
            />
            <span
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--terra-l)",
              }}
            >
              Formación Profesional · {slide.label}
            </span>
          </div>
          <h1 className="hero-title">
            {slide.title} <em>{`${slide.highlight} `}</em>
            {/* <br /> */}
            {slide.subtitle}
          </h1>
          <p className="hero-desc">{slide.desc}</p>
        </div>

        <button
          className="gal-btn"
          style={{ top: "42%" }}
          onClick={() =>
            document
              .getElementById("gallery")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="gal-play">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M5 3.5L13 8L5 12.5V3.5Z" fill="white" />
            </svg>
          </div>
          <span className="gal-play-lbl">
            Galería
            <br />
            de videos
          </span>
        </button>

        <div className="hero-bottom">
          <div className="chips-col">
            <div className="chips-row">
              {COURSES.slice(0, 2).map((c) => (
                <a key={c.name} href="#courses" className="chip">
                  <span className="chip-check">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                      <path
                        d="M1 3.5L2.8 5.2L6 1.5"
                        stroke="#E8C09A"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {c.name}
                </a>
              ))}
            </div>
            <div className="chips-row">
              {COURSES.slice(2).map((c) => (
                <a key={c.name + c.id} href="#courses" className="chip">
                  <span className="chip-check">
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                      <path
                        d="M1 3.5L2.8 5.2L6 1.5"
                        stroke="#E8C09A"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {c.name}
                </a>
              ))}
            </div>
          </div>

          <div
            style={{
              position: "relative",
              width: TOTAL_W,
              height: CFG[0].h + 20,
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            {([0, 1, 2] as const).map((nodeIdx) => {
              const slot = nodeAt.indexOf(nodeIdx) as 0 | 1 | 2;
              const s = SLIDES[slideOf[nodeIdx]];
              const cfg = CFG[slot] ?? CFG[2];

              return (
                <div
                  key={nodeIdx}
                  ref={(el) => {
                    cardRefs.current[nodeIdx] = el;
                  }}
                  onClick={() => handleCardClick(nodeIdx)}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: `${xOf(slot)}px`,
                    width: `${cfg.w}px`,
                    height: `${cfg.h}px`,
                    opacity: cfg.op,
                    transform: `scale(${cfg.sc})`,
                    transformOrigin: "bottom left",
                    background: s.bgColor,
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: 14,
                    cursor: slot === 0 ? "default" : "pointer",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 20px rgba(18,10,6,0.3)",
                  }}
                >
                  <div
                    ref={(el) => {
                      subRefs.current[nodeIdx].thumb = el;
                    }}
                    style={{
                      flex: "1 1 auto",
                      backgroundImage: `url(${s.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center top",
                      position: "relative",
                      minHeight: 0,
                    }}
                  >
                    {slot > 0 && (
                      <div className="hpc-arr">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path
                            d="M1.5 6.5L6.5 1.5M6.5 1.5H3M6.5 1.5V5"
                            stroke="#fff"
                            strokeWidth="1.1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      flexShrink: 0,
                      padding: "8px 11px 10px",
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <p
                      ref={(el) => {
                        subRefs.current[nodeIdx].label = el;
                      }}
                      style={{
                        color: "#fff",
                        fontSize: 11,
                        fontWeight: 500,
                        marginBottom: 2,
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      ref={(el) => {
                        subRefs.current[nodeIdx].sub = el;
                      }}
                      style={{
                        color: "rgba(255,255,255,0.55)",
                        fontSize: 9,
                        fontStyle: "italic",
                      }}
                    >
                      {s.highlight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="slide-ctl">
            <span className="slide-num active">0{current + 1}</span>
            <div className="slide-track">
              <div
                className="slide-fill"
                style={{ width: `${((current + 1) / N) * 100}%` }}
              />
            </div>
            <span className="slide-num">0{N}</span>
            <div style={{ display: "flex", gap: 7 }}>
              <button className="slide-btn" onClick={goPrev}>
                <ChevronLeft size={14} />
              </button>
              <button className="slide-btn active" onClick={goNext}>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const links = [
    { l: "Inicio", h: "#home" },
    { l: "Cursos", h: "#courses" },
    { l: "Sobre nosotros", h: "#about" },
    { l: "Galería", h: "#gallery" },
    { l: "Contacto", h: "#contact" },
  ];
  return (
    <div className="mobile-menu" onClick={onClose}>
      <div className="mobile-menu-backdrop" />
      <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
        <button className="mobile-menu-close" onClick={onClose}>
          <X size={16} />
        </button>
        {/* <div className="mobile-menu-brand">
          <span>FIBE</span>PECH
        </div> */}
        <div className="mobile-menu-brand">
          <img
            src="https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//logo_192x192.png"
            alt="Logo"
            style={{ height: 44, width: "auto", objectFit: "contain" }}
          />
        </div>
        {links.map((n) => (
          <a
            key={n.l}
            href={n.h}
            className="mobile-menu-link"
            onClick={onClose}
          >
            {n.l}
          </a>
        ))}
        <a href="#contact" className="mobile-menu-cta" onClick={onClose}>
          Más información
        </a>
      </div>
    </div>
  );
};
