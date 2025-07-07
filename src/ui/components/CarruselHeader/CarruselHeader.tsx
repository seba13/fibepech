import { useEffect, useState } from "react";
import { carruselItems } from "../../constants/carruselItems";
import { CarruselItem } from "./components/CarruselItem/CarruselItem";
import { useTransition } from "../../../hooks/useTransition";

export const CarruselHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { startTransition, updateBackgrounds } = useTransition();

  // useEffect(() => {
  //   const updateCarousel = () => {
  //     const nextIndex = (activeIndex + 1) % carruselItems.length;

  //     // Inicia la transición (esto notificará a todos los componentes suscritos)
  //     startTransition();

  //     // Cambia el fondo inmediatamente
  //     onBackgroundChange(carruselItems[nextIndex].linearGradient);

  //     // Cambia el contenido después del retraso
  //     setTimeout(() => {
  //       setActiveIndex(nextIndex);
  //     }, 2000); // Medio segundo antes de cambiar el contenido
  //   };

  //   const interval = setInterval(updateCarousel, 5000);
  //   return () => clearInterval(interval);
  // }, [activeIndex, onBackgroundChange, startTransition]);

  useEffect(() => {
    const updateCarousel = () => {
      const nextIndex = (activeIndex + 1) % carruselItems.length;

      // Primero actualiza el fondo próximo
      updateBackgrounds(carruselItems[nextIndex].linearGradient);

      // Luego inicia la transición
      startTransition();

      // Cambia el índice después de que la transición haya tenido tiempo de completarse
      setTimeout(() => {
        setActiveIndex(nextIndex);
      }, 1000); // Tiempo que dura la transición (1s según tu CSS)
    };

    const interval = setInterval(updateCarousel, 3000); // Intervalo total (3s)
    return () => clearInterval(interval);
  }, [activeIndex]);

  // useEffect(() => {
  //   onBackgroundChange(carruselItems[activeIndex].linearGradient);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   const updateBackground = () => {
  //     const nextIndex = (activeIndex + 1) % carruselItems.length;
  //     setActiveIndex(nextIndex);
  //     onBackgroundChange(carruselItems[nextIndex].linearGradient);
  //   };

  //   const interval = setInterval(updateBackground, 5000);
  //   return () => clearInterval(interval);
  // }, [activeIndex, onBackgroundChange]);

  // useEffect(() => {
  //   onBackgroundChange(carruselItems[activeIndex].linearGradient);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="carrusel-header-container">
      {carruselItems.map((item, index) => (
        <CarruselItem
          item={item}
          key={`carruselItem-${item.id}`}
          isActive={index === activeIndex}
          isNext={index === (activeIndex + 1) % carruselItems.length}
        />
      ))}
    </div>
  );
};
