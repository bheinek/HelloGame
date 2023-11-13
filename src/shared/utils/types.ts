import { LEVEL } from "./const";

export type GameCard = {
  title: string;
  img: string;
  route: string;
};

export type Level = keyof typeof LEVEL;
