import { useEffect, useRef } from "react";
import { Card } from "../../../components/Card/Card";
import Typography from "../../../components/Typography/Typhography";
import { cardItems } from "../../constants/cardItems";
import { useDeviceStyles } from "../../../hooks/useDeviceStyles";
import { GraduationCap } from "lucide-react";

// Ajustes mejorados
const FRICTION = 0.95; // Mayor fricción para frenar más rápido
const MAX_VELOCITY = 30; // Velocidad máxima permitida
const CONTAINER_PADDING = 16; // Padding del contenedor (ajustar según tu CSS)

export const Courses = () => {
  const { paddingLeft, paddingVertical, isMobile } = useDeviceStyles();

  const refContainer = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const translateXRef = useRef(0);

  const velocityRef = useRef(0); // Para rastrear la velocidad
  const lastXRef = useRef(0); // Para calcular la velocidad
  const animationFrameRef = useRef<number>(-1); // Para manejar la animación

  useEffect(() => {
    const containerCards = refContainer.current;
    if (!containerCards) return;

    const onPointerDown = (e: PointerEvent) => {
      const containerCards = refContainer.current;
      const target = e.target as HTMLElement;
      const isCard = target.closest(".card") !== null;

      if (!containerCards || !isCard) return;

      isDraggingRef.current = true;
      startXRef.current = e.clientX;
      scrollLeftRef.current = translateXRef.current;

      containerCards.style.cursor = "grabbing";

      document.addEventListener("pointermove", onPointerMove);
    };

    // const onPointerMove = (e: PointerEvent) => {
    //   const containerCards = refContainer.current;
    //   if (!isDraggingRef.current || !containerCards) return;

    //   e.preventDefault();

    //   const distance = e.clientX - startXRef.current;

    //   translateXRef.current = scrollLeftRef.current + distance;

    //   velocityRef.current = e.clientX - lastXRef.current;
    //   lastXRef.current = e.clientX;

    //   containerCards.style.transform = `translateX(${translateXRef.current}px)`;
    // };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDraggingRef.current || !containerCards) return;

      e.preventDefault();

      // Calcula la distancia con suavizado
      const distance = e.clientX - startXRef.current;
      translateXRef.current = scrollLeftRef.current + distance;

      // Calcula velocidad con límite máximo
      velocityRef.current = Math.min(
        Math.max(e.clientX - lastXRef.current, -MAX_VELOCITY),
        MAX_VELOCITY
      );
      lastXRef.current = e.clientX;

      // Aplica límites de desplazamiento
      const bounds = calculateBounds();
      translateXRef.current = Math.min(
        Math.max(translateXRef.current, bounds.min),
        bounds.max
      );

      containerCards.style.transform = `translateX(${translateXRef.current}px)`;
    };

    const onPointerUp = () => {
      const containerCards = refContainer.current;
      if (!containerCards) return;

      isDraggingRef.current = false;
      document.removeEventListener("pointermove", onPointerMove);
      containerCards.style.cursor = "grab";
      animateWithFriction();
    };

    // const animateWithFriction = () => {
    //   if (Math.abs(velocityRef.current) < 0.1) {
    //     // Si la velocidad es muy pequeña, detén la animación
    //     velocityRef.current = 0;
    //     return;
    //   }

    //   // Aplica fricción (reduce la velocidad)
    //   velocityRef.current *= FRICTION;
    //   translateXRef.current += velocityRef.current;

    //   // Actualiza la posición del contenedor
    //   if (refContainer.current) {
    //     refContainer.current.style.transform = `translateX(${translateXRef.current}px)`;
    //   }

    //   // Continúa la animación en el próximo frame
    //   animationFrameRef.current = requestAnimationFrame(animateWithFriction);
    // };

    const calculateBounds = () => {
      const containerWidth = containerCards.scrollWidth;
      const viewportWidth = containerCards.clientWidth;
      return {
        min: viewportWidth - containerWidth - CONTAINER_PADDING,
        max: CONTAINER_PADDING,
      };
    };
    const animateWithFriction = () => {
      if (!refContainer.current) return;

      const bounds = calculateBounds();

      // Aplica fricción
      velocityRef.current *= FRICTION;

      // Si la velocidad es muy pequeña, detén la animación
      if (Math.abs(velocityRef.current) < 0.5) {
        velocityRef.current = 0;

        // Ajuste final para asegurar que esté dentro de los límites
        translateXRef.current = Math.min(
          Math.max(translateXRef.current, bounds.min),
          bounds.max
        );
        refContainer.current.style.transform = `translateX(${translateXRef.current}px)`;
        return;
      }

      // Actualiza posición con límites
      translateXRef.current += velocityRef.current;
      translateXRef.current = Math.min(
        Math.max(translateXRef.current, bounds.min),
        bounds.max
      );

      // // Rebote suave cuando alcanza los límites
      // if (
      //   translateXRef.current >= bounds.max ||
      //   translateXRef.current <= bounds.min
      // ) {
      //   velocityRef.current *= -0.6; // Invierte y reduce la velocidad al chocar con los bordes
      // }

      refContainer.current.style.transform = `translateX(${translateXRef.current}px)`;
      animationFrameRef.current = requestAnimationFrame(animateWithFriction);
    };

    // const getCurrentTranslateX = (element: HTMLElement) => {
    //   const style = window.getComputedStyle(element);
    //   const matrix = new DOMMatrix(style.transform);
    //   return matrix.m41;
    // };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div
      className="wrapper-courses-container"
      style={{
        minWidth: 250,
      }}
    >
      <div
        className={`courses-container ${paddingLeft} ${paddingVertical}`}
        id="courses"
      >
        <Typography
          variant="h2"
          style={{
            color: "var(--color-brown-950)",
          }}
          className={`pb-1 flex items-center col-gap-0-5 ${
            isMobile ? "justify-center" : ""
          }`}
        >
          <GraduationCap size={isMobile ? 30 : 40} />
          Nuestros cursos
        </Typography>

        <div className="cards-container" ref={refContainer}>
          {cardItems.map((item) => (
            <Card item={item} key={`card-item-${item.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
};
