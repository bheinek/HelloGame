import { GamesCard, OverviewGrid } from "@/shared/components/_index";
import { GameCard } from "@/shared/types/mockData";

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
