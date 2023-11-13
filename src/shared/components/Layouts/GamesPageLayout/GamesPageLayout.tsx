import { ReactNode } from "react";
import {
  GameBarLayout,
  GameBoardLayout,
  Header,
} from "@/shared/components/_index";

type Props = {
  gameName: string;
  ScoreBoard: ReactNode;
  Game: ReactNode;
};

export const GamesPageLayout = ({ gameName, ScoreBoard, Game }: Props) => {
  return (
    <>
      <Header level="h1" />
      <GameBarLayout>
        <Header level="h2" gameName={gameName} />
        {ScoreBoard}
      </GameBarLayout>
      <GameBoardLayout> {Game}</GameBoardLayout>
    </>
  );
};
