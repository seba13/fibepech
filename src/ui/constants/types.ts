export interface IMenuItem {
  id: string;
  title: string;
  to: string;
}

export interface ICarouselItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonClass?: string;
  buttonLink: string;
  alt?: string;
  colorPrimary?: string;
  colorSecondary?: string;
  linearGradient: string;
  overlayGradientMobile: string;
  backgroundPositionMobile: string;
  color700: string
}

export interface ICardItem {
  id: string;
  title: string;
  list: string[];
  image: string;
  buttonText?: string;
  buttonClass?: string;
  buttonLink?: string;
}
