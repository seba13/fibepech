import type { ICarruselItem } from "./types";

export const carruselItems: ICarruselItem[] = [
  {
    id: "1",
    image:
      "https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//girl.webp",
    alt: "chica de cabello rojo",
    title: "Cursos De Estética",
    description:
      "Aprende técnicas profesionales de maquillaje, cuidado facial y manicura, o disfruta de tratamientos especializados. ¡Cuida de ti misma(o) con servicios que potencian tu confianza!",
    subtitle: "Realza tu belleza natural",
    buttonText: "Explora nuestros cursos",
    buttonClass: "button-brown",
    buttonLink: "#",
    colorPrimary: "var(--color-brown-50)",
    colorSecondary: "var(--color-brown-400)",
    linearGradient:
      "linear-gradient(to right, #74503C 0%, #9B6C52 50%, #74503C 100%)",
  },
  {
    id: "2",
    image:
      "https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//yoga_girl.webp",
    alt: "Chica realizando yoga",
    title: "Cursos Y Talleres De Masoterapia y Bienestar",
    description:
      "Terapias manuales y alternativas diseñadas para aliviar el estrés, reducir dolores y equilibrar tu cuerpo. Desde masajes hasta terapias con imanes, encuentra tu camino hacia el bienestar integral.",
    subtitle: "Relájate y renueva tu energía",
    buttonLink: "#",
    colorPrimary: "var(--color-steel-blue-50)",
    colorSecondary: "var(--color-steel-blue-400)",
    buttonClass: "button-steel-blue",
    buttonText: "Explora nuestros cursos",
    linearGradient:
      "linear-gradient(to right, #0C1517 0%, #82B0BC 50%, #0C1517 100%)",
  },
];
