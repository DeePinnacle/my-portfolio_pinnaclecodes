import { StaticImageData } from "next/image"

export interface itemsType {
    items: {
      id: number;
      name: string;
      designation: string;
      image: StaticImageData;
    }[];
  }
export interface Skill {
    name: string,
    level: number,
    icon: IconType
}