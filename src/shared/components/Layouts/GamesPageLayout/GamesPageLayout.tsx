import { ReactNode } from "react";
import { Header } from "../_index";
import { LEVEL } from "../../../utils/const";
import { GameBarLayout, GameBoardLayout } from "./_index";

type Props = {
  gameName: string;
  ScoreBoard: ReactNode;
  Game: ReactNode;
};

export const GamesPageLayout = ({ gameName, ScoreBoard, Game }: Props) => {
  return (
    <>
      <Header level={LEVEL.l1} />
      <GameBarLayout>
        <Header level={LEVEL.l2} gameName={gameName} />
        {ScoreBoard}
      </GameBarLayout>
      <GameBoardLayout> {Game}</GameBoardLayout>
    </>
  );
};
