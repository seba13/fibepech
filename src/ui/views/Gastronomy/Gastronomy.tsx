import {
  CakeSlice,
  ChefHat,
  Cookie,
  CookingPot,
  Dessert,
  Martini,
  SoapDispenserDroplet,
} from "lucide-react";
import Typography from "../../../components/Typography/Typhography";
import { useDeviceStyles } from "../../../hooks/useDeviceStyles";
import { ListItem } from "../../components/ListItem/ListItem";

export const Gastronomy = () => {
  const { paddingHorizontal, isMobile } = useDeviceStyles();

  return (
    <div className={`${paddingHorizontal} bg-brown-100`}>
      <div className="flex-grow">
        <Typography
          variant="h2"
          className={`pb-1 flex items-center col-gap-0-5 ${
            isMobile ? "justify-center" : ""
          } brown-700`}
        >
          <CakeSlice size={isMobile ? 30 : 40} />
          Conoce nuestro curso de capación gastronómica
        </Typography>

        <Typography
          variant="h3"
          className={`pb-1 flex items-center col-gap-0-5 ${
            isMobile ? "justify-center" : ""
          } brown-700`}
        >
          Un espacio de aprendizaje, inclusión y oportunidades reales
        </Typography>

        <Typography
          className={`pb-1 flex items-center col-gap-0-5 ${
            isMobile ? "justify-center" : ""
          } brown-700`}
        >
          En nuestro centro de formación, creemos que la gastronomía puede abrir
          puertas, especialmente cuando se enfoca en la inclusión. Por eso,
          hemos diseñado un curso integral de capacitación en pastelería
          gastronómica, orientado a personas con condición del espectro autista,
          brindando las herramientas necesarias para una inserción laboral real
          y significativa.
        </Typography>

        <div className="flex col-gap-1 flex-wrap row-gap-1">
          <div>
            <Typography
              variant="h3"
              className={`pb-1 flex items-center col-gap-0-5 ${
                isMobile ? "justify-center" : ""
              } brown-700`}
            >
              ¿Por qué este curso?
            </Typography>

            <Typography
              className={`pb-1 flex items-center col-gap-0-5 ${
                isMobile ? "justify-center" : ""
              } brown-700`}
            >
              Sabemos que el acceso a una formación de calidad es una
              herramienta poderosa para mejorar la calidad de vida y fomentar la
              inclusión laboral. Este curso está diseñado para entregar
              conocimientos y habilidades prácticas en el área gastronómica, al
              mismo tiempo que promueve el respeto y la integración social de
              sus participantes.
            </Typography>

            <Typography
              variant="h3"
              className={`pb-1 flex items-center col-gap-0-5 ${
                isMobile ? "justify-center" : ""
              } brown-700`}
            >
              <Cookie /> Contenidos del curso
            </Typography>

            <div className="flex justify-between">
              <ul style={{ listStylePosition: "inside" }}>
                <ListItem Icon={Dessert}>
                  <span className="font-medium">Patelería</span>
                </ListItem>
                <ListItem Icon={ChefHat}>
                  <span className="font-medium">Panificación</span>
                </ListItem>
                <ListItem Icon={Martini}>
                  <span className="font-medium">Banquetería</span>
                </ListItem>
                <ListItem Icon={CookingPot}>
                  <span className="font-medium">Cocina Institucional</span>
                </ListItem>
                <ListItem Icon={SoapDispenserDroplet}>
                  <span className="font-medium">
                    {" "}
                    Manipulación de Alimentos
                  </span>
                </ListItem>
              </ul>
            </div>
          </div>

          <div style={{ overflow: "hidden" }}>
            <img
              style={{ objectFit: "contain", borderRadius: 6 }}
              className="max-w-full"
              src="https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//cocina_2.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
