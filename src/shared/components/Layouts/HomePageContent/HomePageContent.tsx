import { GameCard } from "../../../utils/types";
import { GamesCard, OverviewGrid } from "../../Elements/_index";

type Props = {
  games: GameCard[];
};

export const HomePageContent = ({ games }: Props) => {
  return (
    <OverviewGrid>
      {games.map((game) => (
        <GamesCard game={game} />
      ))}
    </OverviewGrid>
  );
};
