import { MapPin } from "lucide-react";
import Typography from "../../../components/Typography/Typhography";
import { Contact } from "../../components/Contact/Contact";
import { MapGoogle } from "../../components/MapGoogle/MapGoogle";
import { SocialMedia } from "../../components/SocialMedia/SocialMedia";

export const Footer = () => {
  return (
    <div
      className="text-color"
      style={{ backgroundColor: "var(--color-brown-950)" }}
    >
      <div className="flex-grow flex px-4 py-3 pb-1 justify-center col-gap-3">
        <div
          className="flex-grow"
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

            <Typography>FIBEPECH@GMAIL.COM</Typography>
          </div>

          <div className="flex flex-col row-gap-0-5 pb-1">
            <Typography variant="h3">Visítanos</Typography>

            <div className="flex items-center">
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
        <div className="px-4 py-1 flex justify-end">
          <Typography>FIBEPECH® 2025 Todos los derechos reservados.</Typography>
        </div>
      </div>
    </div>
  );
};
