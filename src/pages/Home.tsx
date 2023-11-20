import { OverviewGrid } from "@/components/Layouts/OverviewGrid/OverviewGrid";
import { GamesCard } from "@/components/_index";
import { ROUTES } from "@/router/routes";
import { Page } from "@/shared/pages/Page";
import { GameCard } from "@/shared/types/games";

export const Home = () => {
  const gamesList: GameCard[] = [
    {
      id: 1,
      title: "Tic Tac Toe",
      img: "src/modules/TicTacToe/assets/cover.png",
      description: "A simple 2D Tic tac toe game",
      route: ROUTES.gamesRoutes.ticTacToe,
    },
    {
      id: 2,
      title: "Pong",
      img: "src/modules/Pong/assets/cover.png",
      description: "Classical 2D pong game",
      route: ROUTES.gamesRoutes.pong,
    },
  ];

  return (
    <Page>
      <OverviewGrid>
        {gamesList.map((game) => (
          <GamesCard key={game.id} game={game} />
        ))}
      </OverviewGrid>
    </Page>
  );
};
