import type { ICarouselItem } from "../../constants/types";

export interface CarouselItemProps {
  item: ICarouselItem;
  isActive: boolean;
  isNext: boolean;
  index: number;
  length: number;
}

export interface CarouselIndicatorProps {
  activeIndex: number;
  length: number;
  onPressIndicator: (index:number)=>void

}
