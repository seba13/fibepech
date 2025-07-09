import { School } from "lucide-react";
import { CardText } from "../../../components/CardText/CardText";
import Typography from "../../../components/Typography/Typhography";
// import useDeviceDetect from "../../../hooks/useDeviceDetect";
import { useDeviceStyles } from "../../../hooks/useDeviceStyles";

export const About = () => {
  // const { isMobile } = useDeviceDetect();
  const { paddingHorizontal, paddingVertical, isMobile } = useDeviceStyles();

  return (
    <div
      id="about"
      className={`
      ${paddingHorizontal}
      ${paddingVertical}
      flex flex-col row-gap-2`}
      style={{
        minWidth: 250,
        // backgroundColor: "var(--color-brown-100)",
        backgroundColor: "var(--color-brown-100)",
      }}
    >
      <div className="flex flex-col row-gap-1">
        <Typography
          variant="h2"
          className={`color-primary flex items-center col-gap-0-5  ${
            isMobile ? "justify-center" : ""
          }`}
          style={{
            color: "var(--color-brown-950)",
          }}
        >
          <School size={isMobile ? 30 : 40} /> ¿Quiénes somos?
        </Typography>

        <Typography
          className="color-primary"
          style={{
            maxWidth: 1600,

            color: "var(--color-brown-950)",
          }}
        >
          FIBEPECH (Fundación Integral de Barberos, Estilistas y Peluqueros
          Educando por Chile) es una organización sin fines de lucro dedicada a
          promover el desarrollo personal, profesional y social de los
          trabajadores del rubro de la belleza en Chile. Nuestra fundación nace
          del compromiso de fortalecer el oficio de barberos, peluqueros y
          estilistas, a través de la educación, la capacitación continua y la
          generación de espacios inclusivos para el crecimiento y el bienestar.
        </Typography>
      </div>

      <div
        className="flex justify-between row-gap-1"
        style={{
          flexWrap: isMobile ? "wrap" : "nowrap", // Solo wrap en móvil
          maxWidth: "100%",
          gap: "1rem", // Añade espacio entre elementos
        }}
      >
        <div className="flex flex-col row-gap-3 flex-grow">
          <CardText style={{ maxWidth: 650 }}>
            <div className="flex flex-col row-gap-1">
              <Typography
                variant="h3"
                className="color-primary"
                style={{ color: "var(--color-brown-950)" }}
              >
                Nuestra visión
              </Typography>

              <Typography
                className="color-primary"
                style={{ color: "var(--color-brown-950)" }}
              >
                Nuestra visión es ser una organización líder a nivel mundial en
                la defensa y promoción de los derechos e intereses de
                peluqueros, barberos y estilistas. Aspiramos a impulsar
                iniciativas que mejoren la calidad de vida de nuestros miembros,
                asegurando que cada profesional tenga acceso a recursos,
                formación y oportunidades que les permitan crecer, prosperar e
                innovar en su carrera. Nos proponemos ser un referente de
                excelencia, innovación y solidaridad en la industria de la
                belleza, donde la diversidad y la inclusión sean pilares
                fundamentales. A través de nuestra labor, buscamos inspirar a
                futuras generaciones de estilistas y profesionales de la belleza
                a alcanzar su máximo potencial y a trabajar en conjunto por un
                futuro más justo y próspero para todos.
              </Typography>
            </div>
          </CardText>

          <CardText style={{ maxWidth: 650 }}>
            <div className="flex flex-col row-gap-1">
              <Typography
                variant="h3"
                className="color-primary"
                style={{ color: "var(--color-brown-950)" }}
              >
                Nuestra visión
              </Typography>

              <Typography
                className="color-primary"
                style={{ color: "var(--color-brown-950)" }}
              >
                Nuestra visión es ser una organización líder a nivel mundial en
                la defensa y promoción de los derechos e intereses de
                peluqueros, barberos y estilistas. Aspiramos a impulsar
                iniciativas que mejoren la calidad de vida de nuestros miembros,
                asegurando que cada profesional tenga acceso a recursos,
                formación y oportunidades que les permitan crecer, prosperar e
                innovar en su carrera. Nos proponemos ser un referente de
                excelencia, innovación y solidaridad en la industria de la
                belleza, donde la diversidad y la inclusión sean pilares
                fundamentales. A través de nuestra labor, buscamos inspirar a
                futuras generaciones de estilistas y profesionales de la belleza
                a alcanzar su máximo potencial y a trabajar en conjunto por un
                futuro más justo y próspero para todos.
              </Typography>
            </div>
          </CardText>
        </div>

        <div style={{ maxHeight: 600 }}>
          <img
            src="https://yfyexpycdnfgbrkxkbyz.storage.supabase.co/v1/object/public/static-assets//logo_1024.webp"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};
