import { GamesPage } from "@/shared/pages/GamesPage";
import { Game } from "../components/_index";

export const TicTacToe = () => {
  return <GamesPage gameTitle="Tic Tac Toe" gameLogo="" game={<Game />} />;
};
