import type { Meta, StoryObj } from "@storybook/react";

import { BoardSquare } from "./BoardSquare";

const meta: Meta<typeof BoardSquare> = {
  title: "TicTacToe/Components/BoardSquare",
  component: BoardSquare,
};

export default meta;

type Story = StoryObj<typeof BoardSquare>;

export const PlayerX: Story = {
  args: {
    player: "X",
  },
};
