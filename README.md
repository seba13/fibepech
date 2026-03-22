# FIBEPECH 🌟

**Fundación Integral de Barberos, Estilistas y Peluqueros Educando por Chile**

Sitio web oficial de FIBEPECH, una organización sin fines de lucro dedicada a promover el desarrollo personal, profesional y social de los trabajadores del rubro de la belleza en Chile.

---

## 📋 Descripción

FIBEPECH es una fundación que nace del compromiso de fortalecer el oficio de barberos, peluqueros y estilistas a través de la educación, la capacitación continua y la generación de espacios inclusivos para el crecimiento y el bienestar.

Este repositorio contiene el código fuente del sitio web institucional, desarrollado como una Single Page Application (SPA) moderna y responsiva.

---

## 🚀 Stack tecnológico

| Tecnología | Versión | Descripción |
|---|---|---|
| [React](https://react.dev/) | ^19.1.0 | Librería principal de UI |
| [TypeScript](https://www.typescriptlang.org/) | ~5.8.3 | Tipado estático |
| [Vite](https://vitejs.dev/) | ^7.0.0 | Build tool y dev server |
| [React Router](https://reactrouter.com/) | ^7.6.3 | Navegación SPA |
| [Lucide React](https://lucide.dev/) | ^0.525.0 | Íconos |
| [React Photo Album](https://react-photo-album.com/) | ^3.1.0 | Galería de fotos |
| [Yet Another React Lightbox](https://yet-another-react-lightbox.com/) | ^3.24.0 | Visor de imágenes

---

## 📁 Estructura del proyecto

```
fibepech/
├── public/
│   └── assets/
│       ├── fonts/          # Tipografía Poppins (Light, Regular, Medium, SemiBold, Thin)
│       └── images/         # Favicons
├── src/
│   ├── components/         # Componentes base reutilizables
│   │   ├── Card/           # Tarjeta de curso
│   │   ├── CardText/       # Tarjeta de texto
│   │   └── Typography/     # Sistema tipográfico
│   ├── hooks/              # Custom hooks (useDeviceStyles, etc.)
│   ├── ui/
│   │   ├── components/     # Componentes de UI específicos
│   │   │   ├── CarruselHeader/   # Carrusel principal
│   │   │   ├── Contact/          # Información de contacto
│   │   │   ├── Gallery/          # Galería de imágenes
│   │   │   ├── ListItem/         # Ítem de lista
│   │   │   ├── MapGoogle/        # Mapa de ubicación
│   │   │   ├── Navbar/           # Barra de navegación (Desktop + Mobile)
│   │   │   └── SocialMedia/      # Redes sociales
│   │   ├── constants/      # Datos estáticos (cursos, galería, menú, carrusel)
│   │   ├── pages/          # Páginas de la app
│   │   └── views/          # Secciones de la página principal
│   │       ├── About/      # ¿Quiénes somos?
│   │       ├── Contact/    # Contacto
│   │       ├── Courses/    # Cursos y talleres
│   │       ├── Footer/     # Pie de página
│   │       ├── Gallery/    # Galería
│   │       ├── Gastronomy/ # Sección gastronomía
│   │       └── Header/     # Encabezado principal
│   └── main.tsx            # Punto de entrada
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

---

## 🎓 Secciones del sitio

- **Inicio** — Encabezado principal con carrusel de imágenes
- **Cursos** — Catálogo de cursos y talleres ofrecidos por la fundación:
  - Cursos y talleres deportivos (Yoga, Defensa personal, Zumba, Karate…)
  - Masoterapia (Masajes, Drenajes linfáticos, Reiki…)
  - Estética (Maquillaje, Manicure, Pedicure…)
  - Peluquería (Barbería, Cortes, Peinados…)
  - Integración (Repostería, Coctelería, Cocina…)
- **Sobre nosotros** — Misión, visión y valores de FIBEPECH
- **Galería** — Fotografías de actividades y eventos
- **Contacto** — Mapa, dirección y redes sociales

---

## ⚙️ Instalación y uso

### Prerrequisitos

- Node.js >= 18
- npm >= 9

### Instalar dependencias

```bash
npm install
```

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_LOGO=<url_del_logo>
```

### Desarrollo

```bash
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:5173` (accesible desde la red local gracias al flag `--host`).

### Build de producción

```bash
npm run build
```

### Vista previa del build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## 📍 Contacto

- **Dirección:** Av. Gómez Carreño 666, Belloto Norte, Quilpué
- **Email:** contacto@fibepech.cl

---

## ©️ Licencia

FIBEPECH® 2025 — Todos los derechos reservados.
