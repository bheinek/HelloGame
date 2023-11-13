import { ReactNode } from "react";
import { Header } from "../_index";

import { GameBarLayout, GameBoardLayout } from "./_index";

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
