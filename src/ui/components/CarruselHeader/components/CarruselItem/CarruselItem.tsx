import Typography from "../../../../../components/Typography/Typhography";
// import useDeviceDetect from "../../../../../hooks/useDeviceDetect";
import { useDeviceStyles } from "../../../../../hooks/useDeviceStyles";
import { Button } from "../../../Button/Button";
import type { CarruselItemProps } from "../../types";

export const CarruselItem = ({ item }: CarruselItemProps) => {
  // const { isMobile } = useDeviceDetect();
  const { paddingLeft, paddingBottom, marginBottom } = useDeviceStyles();
  return (
    <div
      className={`
      carrusel-item
    `}
    >
      <div
        className={`carrusel-header-item ${paddingLeft} ${paddingBottom}`}
        style={
          {
            // backgroundImage: `url(${item.image})`,
            // backgroundSize: isMobile ? "auto 100%" : "auto 100%",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: isMobile ? "right bottom" : "right bottom",
            // // Para asegurar que la imagen siempre cubra el ancho necesario en móviles
            // ...(isMobile && {
            //   backgroundPositionX: "60%", // Ajusta este valor según necesites
            //   backgroundSize: "100% auto" // O "contain" dependiendo del efecto deseado
            // })
          }
        }
      >
        <div
          className="img-carrusel-item"
          style={{
            // transform: `translateX(${isMobile ? "20%" : "100px"})`,
            transform: `translateX(100px)`,
          }}
        >
          <img
            // width="652"
            src={item.image}
            alt={item.alt}
          />
        </div>

        <div className="flex flex-col info-carrusel-item">
          <Typography
            variant="header"
            className="mb-1"
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

        {/* <div className="info-carrusel-item flex flex-col flex-grow justify-end">
        <div>
          <Typography
            variant="header"
            className="mb-2"
            style={{
              color: item.colorPrimary,
            }}
          >
            {item.title}
          </Typography>

          <div>
            <Button
              style={{
                color: item.colorSecondary,
              }}
              value={item.buttonText}
              href={item.buttonLink}
              className={item.buttonClass}
            />
          </div>
        </div>

        <div>
          <div className="mb-1">
            <Typography
              variant="h2"
              style={{
                color: item.colorPrimary,
              }}
            >
              {item.subtitle}
            </Typography>
          </div>

          <div>
            <Typography
              style={{
                color: item.colorPrimary,
              }}
            >
              {item.description}
            </Typography>
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
};
