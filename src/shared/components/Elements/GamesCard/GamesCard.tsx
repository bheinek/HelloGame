import { CardWithContent } from "@/shared/components/_index";
import { GameCard } from "@/shared/types/mockData";

type Props = {
  game: GameCard;
};

export const GamesCard = ({ game }: Props) => {
  return (
    <CardWithContent title={game.title} image={game.img} link={game.route} />
  );
};
