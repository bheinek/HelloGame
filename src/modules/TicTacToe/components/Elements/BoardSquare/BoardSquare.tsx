import { Player } from "../../../utils/types";

type Props = {
  player: Player;
  onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const BoardSquare = ({ player, onSquareClick }: Props) => {
  return (
    <button
      onClick={onSquareClick}
      className="w-16 h-16 bg-gray-300 border border-gray-500 flex justify-center items-center text-2xl font-bold"
    >
      {player}
    </button>
  );
};
