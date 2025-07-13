import { MapPin } from "lucide-react";
import Typography from "../../../components/Typography/Typhography";
import { Contact } from "../../components/Contact/Contact";
import { MapGoogle } from "../../components/MapGoogle/MapGoogle";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";
import { useDeviceStyles } from "../../../hooks/useDeviceStyles";

export const Footer = () => {
  const { paddingHorizontal, paddingTop } = useDeviceStyles();

  return (
    <div
      className="text-color"
      style={{
        backgroundColor: "var(--color-brown-950)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        className={`flex ${paddingHorizontal} ${paddingTop} pb-1  justify-start col-gap-3 row-gap-3 flex-wrap`}
      >
        <div
          className="flex-grow-1"
          style={{
            height: 350,
            maxWidth: 700,
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <MapGoogle />
        </div>

        <div>
          <div className="flex flex-col row-gap-0-5 pb-1">
            <Typography variant="h3">Contáctanos</Typography>
            <Contact />

            <a
              className="nav-link"
              style={{ alignSelf: "flex-start" }}
              href="mailto:contacto@fibepech.cl"
            >
              CONTACTO@FIBEPECH.CL
            </a>

            {/* <Typography></Typography> */}
          </div>

          <div className="flex flex-col row-gap-0-5 pb-1 ">
            <Typography variant="h3">Visítanos</Typography>

            <div className="flex items-center col-gap-0-5">
              <MapPin className="icon-media" />
              <Typography>
                Av. Gomez Carreño 666, Belloto norte, Quilpue
              </Typography>
            </div>
          </div>

          <div className="flex flex-col row-gap-0-5 items-start ">
            <Typography variant="h3">SÍGUENOS EN NUESTRAS REDES</Typography>

            <SocialMedia />
          </div>
        </div>

        <div>
          <div className="flex col-gap-0-5">
            <div>
              <img width="100" src={import.meta.env.VITE_LOGO} />
            </div>

            <div
              className="flex flex-col  row-gap-0-5 "
              style={{ maxWidth: 500 }}
            >
              <Typography variant="h3">FIBEPECH</Typography>

              <Typography>
                FUNDACIÓN INTEGRAL DE BARBEROS , ESTILISTAS Y PELUQUEROS
                EDUCANDO POR CHILE.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #fff",
        }}
      >
        <div className={`${paddingHorizontal} py-1 flex justify-end`}>
          <Typography>FIBEPECH® 2025 Todos los derechos reservados.</Typography>
        </div>
      </div>
    </div>
  );
};
