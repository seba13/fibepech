import type { ICarouselItem } from "./types";

export const carouselItems: ICarouselItem[] = [
  {
    id: "1",
    image:
      "https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//girl_2.png",
    alt: "chica de cabello rojo",
    title: "Cursos De Estética",
    description:
      "Aprende técnicas profesionales de maquillaje, cuidado facial y manicura, o disfruta de tratamientos especializados. ¡Cuida de ti misma(o) con servicios que potencian tu confianza!",
    subtitle: "Realza tu belleza natural",
    buttonText: "Explora nuestros cursos",
    buttonClass: "button-brown",
    buttonLink: "#courses",
    colorPrimary: "var(--color-brown-50)",
    colorSecondary: "var(--color-brown-400)",
    // linearGradient:
    //   "linear-gradient(to right, #74503C 0%, #9B6C52 50%, #74503C 100%)",
    linearGradient: `radial-gradient(circle,
      var(--color-brown-300) 20%,
      var(--color-brown-500) 60%,  
      var(--color-brown-700) 90% 
    )`,
  },
  {
    id: "2",
    image:
      "https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//yoga_2.png",
    alt: "Chica realizando yoga",
    title: "Cursos Y Talleres De Masoterapia y Bienestar",
    description:
      "Terapias manuales y alternativas diseñadas para aliviar el estrés, reducir dolores y equilibrar tu cuerpo. Desde masajes hasta terapias con imanes, encuentra tu camino hacia el bienestar integral.",
    subtitle: "Relájate y renueva tu energía",
    buttonLink: "#courses",
    colorPrimary: "var(--color-steel-blue-50)",
    colorSecondary: "var(--color-steel-blue-400)",
    buttonClass: "button-steel-blue",
    buttonText: "Explora nuestros cursos",

    // linearGradient:
    //   "linear-gradient(to right, #0C1517 0%, #82B0BC 50%, #0C1517 100%)",
    linearGradient: `radial-gradient(circle,
      var(--color-steel-blue-300) 20%,
      var(--color-steel-blue-500) 60%,  
      var(--color-steel-blue-700) 90% 
    )`,
  },
  {
    id: "3",
    image:
      "https://yfyexpycdnfgbrkxkbyz.supabase.co/storage/v1/object/public/static-assets//hairdresser_2.png",
    alt: "estilista",
    title: "Cursos De Peluquería Y Barbería",
    description:
      "Desde cortes modernos hasta tratamientos capilares rejuvenecedores. Domina técnicas de peinado, coloración o elaboración de productos naturales para un cabello saludable.",
    subtitle: "Estilo y cuidado personalizado",
    buttonLink: "#courses",
    colorPrimary: "var(--color-midnight-blue-50)",
    colorSecondary: "var(--color-midnight-blue-500)",
    buttonClass: "button-steel-blue",
    buttonText: "Explora nuestros cursos",

    // linearGradient:
    //   "linear-gradient(-90deg, #0D1630 0%, #5E7AD2 50%, #0D1630 100%)",
    linearGradient: `radial-gradient(circle,
      var(--color-midnight-blue-500) 20%,
      var(--color-midnight-blue-700) 60%,  
      var(--color-midnight-blue-900) 90% 
    )`,
  },
];
