import { ROUTES } from "../router/routes";
import { GameCard } from "../shared/utils/types";

export const gamesList: GameCard[] = [
  {
    title: "Tic Tac Toe",
    img: "src/modules/TicTacToe/assets/cover.png",
    route: ROUTES.gamesRoutes.ticTacToe,
  },
  {
    title: "Pong",
    img: "src/modules/Pong/assets/cover.png",
    route: ROUTES.gamesRoutes.pong,
  },
];
