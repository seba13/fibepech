import type { ICarruselItem } from "../../constants/types";

// export interface CarruselHeaderProps {
//   onBackgroundChange: (bgColor: string) => void;
// }

export interface CarruselItemProps {
  item: ICarruselItem;
  isActive: boolean;
  isNext: boolean;
}
