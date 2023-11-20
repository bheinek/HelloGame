import { CardWithContent } from "@/shared/components/_index";
import { GameCard } from "@/shared/types/games";

type Props = {
  game: GameCard;
};

export const GamesCard = ({ game }: Props) => {
  return (
    <CardWithContent
      title={game.title}
      description={game.description}
      image={game.img}
      link={game.route}
    />
  );
};
