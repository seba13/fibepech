import Typography from "../../../../../components/Typography/Typhography";
import { useDeviceStyles } from "../../../../../hooks/useDeviceStyles";
import { Button } from "../../../Button/Button";
import type { CarouselItemProps } from "../../types";

export const CarruselItem = ({
  item,
  isActive,
  // isNext,
  index,
}: CarouselItemProps) => {
  const {
    paddingLeft,
    // paddingVertical,
    isMobile,
    marginBottom,
  } = useDeviceStyles();

  return (
    <div
      className={`
        carrusel-item
      `}
      style={{
        // transform: `translateX(${-index * 100}%)`,
        transform: `translateX(${isActive ? -index * 100 : -index * 100 + 2}%)`,
        position: "relative",
        userSelect: isActive ? "text" : "none",
        zIndex: isActive ? 1 : 0,

        transition: `transform 1s ease, opacity ${
          isActive ? "1s" : ".5s"
        } ease-in-out`,
        opacity: isActive ? 1 : 0,
      }}
    >
      <div
        // className={`carrusel-header-item ${paddingLeft} ${paddingVertical}`}
        className={`carrusel-header-item ${paddingLeft} py-2`}
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: isMobile ? "auto 100%" : "auto 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          ...(isMobile && {
            backgroundPosition: "12px 100%",
            backgroundSize: "350px",
            // backgroundColor: "#00000070",
            backgroundImage: `url(${item.image}) `,
          }),
        }}
      >
        <div className="flex flex-col info-carrusel-item">
          <Typography
            variant="h1"
            className={`mb-1`}
            style={{
              color: item.colorPrimary,
            }}
          >
            {item.title}
          </Typography>

          <Button
            style={{
              color: item.colorSecondary,
            }}
            value={item.buttonText}
            href={item.buttonLink}
            className={`${item.buttonClass} ${marginBottom}`}
          />
          {/* mb-0-5 ${isMobile ? "carrusel-text-bg" : ""}  */}

          <div className={`mb-0-5 ${isMobile ? "carrusel-text-bg" : ""}  `}>
            <Typography
              variant="h2"
              style={{
                color: item.colorPrimary,
              }}
              className="mb-0-5"
            >
              {item.subtitle}
            </Typography>

            <Typography
              style={{
                color: item.colorPrimary,
              }}
            >
              {item.description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
