import { GameBoardLayout } from "@/shared/components/_index";

type Props = {
  rowsCount?: number;
  colsCount?: number;
};

export const Game = ({ rowsCount = 3, colsCount = 3 }: Props) => {
  const board = [];
  for (let i = 0; i < rowsCount; i++) {
    const row = [];
    for (let j = 0; j < colsCount; j++) {
      row.push(<th key={j}>{/* <BoardSquare player={undefined} /> */}</th>);
    }
    board.push(<tr key={i}>{row}</tr>);
  }

  return (
    <GameBoardLayout>
      <table>{board}</table>
    </GameBoardLayout>
  );
};
