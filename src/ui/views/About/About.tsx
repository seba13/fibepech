import { CardText } from "../../../components/CardText/CardText";
import Typography from "../../../components/Typography/Typhography";
// import useDeviceDetect from "../../../hooks/useDeviceDetect";
import { useDeviceStyles } from "../../../hooks/useDeviceStyles";

export const About = () => {
  // const { isMobile } = useDeviceDetect();
  const { paddingHorizontal, paddingVertical } = useDeviceStyles();
  return (
    <div
      id="about"
      className={`
      ${paddingHorizontal}
      ${paddingVertical}
      flex flex-col row-gap-2`}
      style={{
        minWidth: 250,
        backgroundColor: "var(--color-red-800)",
      }}
    >
      <div className="flex flex-col row-gap-1">
        <Typography variant="h1" className="color-primary">
          ¿Quiénes somos?
        </Typography>

        <Typography className="color-primary">
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
        className="flex row-gap-2 col-gap-4 justify-between"
        style={{
          flexWrap: "wrap",
          maxWidth: "100%",
        }}
      >
        <CardText style={{ maxWidth: 700 }}>
          <div className="flex flex-col row-gap-1">
            <Typography variant="h1" className="color-primary">
              Nuestra visión
            </Typography>

            <Typography className="color-primary">
              Nuestra visión es ser una organización líder a nivel mundial en la
              defensa y promoción de los derechos e intereses de peluqueros,
              barberos y estilistas. Aspiramos a impulsar iniciativas que
              mejoren la calidad de vida de nuestros miembros, asegurando que
              cada profesional tenga acceso a recursos, formación y
              oportunidades que les permitan crecer, prosperar e innovar en su
              carrera. Nos proponemos ser un referente de excelencia, innovación
              y solidaridad en la industria de la belleza, donde la diversidad y
              la inclusión sean pilares fundamentales. A través de nuestra
              labor, buscamos inspirar a futuras generaciones de estilistas y
              profesionales de la belleza a alcanzar su máximo potencial y a
              trabajar en conjunto por un futuro más justo y próspero para
              todos.
            </Typography>
          </div>
        </CardText>

        <CardText style={{ maxWidth: 700 }}>
          <div className="flex flex-col row-gap-1">
            <Typography variant="h1" className="color-primary">
              Nuestra visión
            </Typography>

            <Typography className="color-primary">
              Nuestra visión es ser una organización líder a nivel mundial en la
              defensa y promoción de los derechos e intereses de peluqueros,
              barberos y estilistas. Aspiramos a impulsar iniciativas que
              mejoren la calidad de vida de nuestros miembros, asegurando que
              cada profesional tenga acceso a recursos, formación y
              oportunidades que les permitan crecer, prosperar e innovar en su
              carrera. Nos proponemos ser un referente de excelencia, innovación
              y solidaridad en la industria de la belleza, donde la diversidad y
              la inclusión sean pilares fundamentales. A través de nuestra
              labor, buscamos inspirar a futuras generaciones de estilistas y
              profesionales de la belleza a alcanzar su máximo potencial y a
              trabajar en conjunto por un futuro más justo y próspero para
              todos.
            </Typography>
          </div>
        </CardText>
      </div>
    </div>
  );
};
