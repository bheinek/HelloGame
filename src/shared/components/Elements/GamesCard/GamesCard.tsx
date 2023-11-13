import { GameCard } from "../../../utils/types";
import { CardWithContent } from "../_index";

type Props = {
  game: GameCard;
};

export const GamesCard = ({ game }: Props) => {
  return (
    <CardWithContent title={game.title} image={game.img} link={game.route} />
  );
};
