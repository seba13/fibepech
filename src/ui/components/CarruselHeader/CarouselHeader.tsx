import { useCallback, useEffect, useRef, useState } from "react";
import { useTransition } from "../../../hooks/useTransition";
import { carouselItems } from "../../constants/carruselItems";
import { CarruselItem } from "./components/CarouselItem/CarouselItem";
import { CarouselIndicator } from "./components/CarouselIndicator/CarouselIndicator";

export const CarouselHeader = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [nextIndex, setNextIndex] = useState<number>(0);
  const [isChanging, setIsChanging] = useState<boolean>(false);
  const timeoutInterval = useRef<ReturnType<typeof setTimeout>>(null);

  const {
    startTransition,
    isTransitioning,
    nextBackground,
    animationDuration,
  } = useTransition();

  useEffect(() => {
    const updateCarousel = () => {
      if (isTransitioning || isChanging) return;

      const nextIdx = (currentIndex + 1) % carouselItems.length;

      // Iniciar el proceso de cambio
      setIsChanging(true);
      setNextIndex(nextIdx);
      nextBackground(carouselItems[nextIdx].linearGradient);
      startTransition();

      setCurrentIndex(nextIdx);
      setIsChanging(false);

      // Actualizar el índice actual después de la duración de la transición
      // setTimeout(() => {
      //   setCurrentIndex(nextIdx);
      //   setIsChanging(false);
      // }, 1); // Ajusta este valor según la duración de tu transición
    };

    timeoutInterval.current = setTimeout(updateCarousel, animationDuration);

    return () => {
      if (timeoutInterval.current) clearTimeout(timeoutInterval.current);
    };
  }, [isTransitioning, isChanging, currentIndex]);

  // const handlePressCarouselItem = useCallback((index: number) => {

  //   if(index >= 0 && index < carouselItems.length) {
  //     setCurrentIndex(index);
  //   }

  // },[])
  const handlePressCarouselItem = useCallback(
    (index: number) => {
      if (
        index >= 0 &&
        index < carouselItems.length &&
        index !== currentIndex
      ) {
        if (!isTransitioning) {
          if (timeoutInterval.current) {
            clearTimeout(timeoutInterval.current);
          }
          nextBackground(carouselItems[index].linearGradient);
          setCurrentIndex(index);
          startTransition();
        }

        // setIsChanging(true);
        // setNextIndex(index);
        // nextBackground(carouselItems[index].linearGradient);
        // startTransition();
        // setCurrentIndex(index);
        // setIsChanging(false);
      }
    },
    [currentIndex, nextBackground, startTransition, isTransitioning]
  );

  return (
    <div className="flex flex-col flex-grow">
      <div className="carrusel-header-container">
        {carouselItems.map((item, index) => (
          <CarruselItem
            index={index}
            length={carouselItems.length}
            item={item}
            key={`carruselItem-${item.id}`}
            isActive={index === currentIndex}
            isNext={index === nextIndex}
          />
        ))}
      </div>
      <CarouselIndicator
        length={carouselItems.length}
        activeIndex={currentIndex}
        onPressIndicator={handlePressCarouselItem}
      />
    </div>
  );
};
