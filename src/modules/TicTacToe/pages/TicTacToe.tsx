import { GamesPageLayout } from "../../../shared/components/Layouts/GamesPageLayout/GamesPageLayout";
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
