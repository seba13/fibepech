import { Quote, School } from "lucide-react";
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
     min-w-250 bg-brown-50`}
      style={{ position: "relative", zIndex: 10 }}
    >
      <div className={` flex flex-col row-gap-2`}>
        <div className="flex flex-col row-gap-1">
          <Typography
            variant="h2"
            className={`color-primary flex items-center col-gap-0-5  ${
              isMobile ? "justify-center" : ""
            } brown-700`}
          >
            <School size={isMobile ? 30 : 40} /> ¿Quiénes somos?
          </Typography>

          <Typography className="brown-700">
            <span className="font-semibold">FIBEPECH</span> (Fundación Integral
            de Barberos, Estilistas y Peluqueros Educando por Chile) es una
            organización sin fines de lucro dedicada a promover el desarrollo
            personal, profesional y social de los trabajadores del rubro de la
            belleza en Chile. Nuestra fundación nace del compromiso de
            fortalecer el oficio de barberos, peluqueros y estilistas, a través
            de la educación, la capacitación continua y la generación de
            espacios inclusivos para el crecimiento y el bienestar.
          </Typography>
        </div>

        <div
          className="flex justify-between row-gap-1 max-w-full gap-1"
          style={{
            flexWrap: isMobile ? "wrap" : "nowrap",
          }}
        >
          <div className="flex flex-col row-gap-3 flex-grow">
            <CardText className="flex flex-col row-gap-1 max-w-600">
              <Quote size={isMobile ? 30 : 40} />
              <div className="flex flex-col row-gap-1">
                <Typography variant="h3" className="brown-700">
                  Nuestra misión
                </Typography>

                <Typography className="brown-700">
                  Nuestra misión es promover el bienestar integral y el
                  desarrollo profesional de peluqueros, barberos y estilistas
                  (profesionales de la belleza). Nos comprometemos a crear una
                  comunidad inclusiva y solidaria que fomente la capacitación
                  continua, el intercambio de conocimientos y experiencias, y el
                  apoyo mutuo entre nuestros miembros. A través de programas de
                  formación, talleres y eventos a beneficio, buscamos dignificar
                  nuestra profesión, empoderar a los profesionales del sector y
                  garantizar que todos tengan acceso a oportunidades equitativas
                  en el ámbito laboral. Creemos que, trabajando juntos, podemos
                  elevar el estándar de la industria de la belleza y contribuir
                  al desarrollo sostenible VISION de las comunidades.
                </Typography>
              </div>

              <div className="flex flex-col row-gap-1">
                <Typography variant="h3" className="brown-700">
                  Nuestra visión
                </Typography>

                <Typography className="brown-700">
                  Nuestra visión es ser una organización líder a nivel mundial
                  en la defensa y promoción de los derechos e intereses de
                  peluqueros, barberos y estilistas. Aspiramos a impulsar
                  iniciativas que mejoren la calidad de vida de nuestros
                  miembros, asegurando que cada profesional tenga acceso a
                  recursos, formación y oportunidades que les permitan crecer,
                  prosperar e innovar en su carrera. Nos proponemos ser un
                  referente de excelencia, innovación y solidaridad en la
                  industria de la belleza, donde la diversidad y la inclusión
                  sean pilares fundamentales. A través de nuestra labor,
                  buscamos inspirar a futuras generaciones de estilistas y
                  profesionales de la belleza a alcanzar su máximo potencial y a
                  trabajar en conjunto por un futuro más justo y próspero para
                  todos.
                </Typography>
              </div>
            </CardText>
          </div>

          <div className="max-h-600">
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
    </div>
  );
};
