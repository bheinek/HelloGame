import { GamesPageLayout } from "@/shared/components/_index";
import { Game, ScoreBoard } from "../components/Layout/_index";

export const TicTacToe = () => {
  return (
    // <GamesPageLayout>
    //   <Board />
    //   <ScoreBoard />
    // </GamesPageLayout>
    <GamesPageLayout
      gameName="tic tac toe"
      ScoreBoard={<ScoreBoard />}
      Game={<Game />}
    />
  );
};
