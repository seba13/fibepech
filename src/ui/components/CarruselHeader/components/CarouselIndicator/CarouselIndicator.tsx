import type { CarouselIndicatorProps } from "../../types";

export const CarouselIndicator = ({
  length,
  activeIndex,
  onPressIndicator,
}: CarouselIndicatorProps) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: 10,
        zIndex: 100,
        display: "flex",
        columnGap: ".5rem",
      }}
    >
      {Array.from(new Array(length), (_, i) => i).map((index) => {
        return (
          <CarouselIndicatorItem
            key={`Carousel-indicator-${index}`}
            isActive={index === activeIndex}
            onPress={() => onPressIndicator(index)}
          />
        );
      })}
    </div>
  );
};

const CarouselIndicatorItem = ({
  isActive,
  onPress,
}: {
  isActive: boolean;
  onPress: () => void;
}) => {
  return (
    <div
      onClick={onPress}
      style={{
        cursor: "pointer",
        backgroundColor: `var(--color-brown-${isActive ? "100" : "50"})`,
        borderRadius: "50%",
        width: "12px",
        height: "12px",
      }}
    />
  );
};
