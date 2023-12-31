import type { Meta, StoryObj } from "@storybook/react";

import { Game } from "./Game";

const meta: Meta<typeof Game> = {
  title: "TicTacToe/Components/Board",
  component: Game,
};

export default meta;

type Story = StoryObj<typeof Game>;

export const PlayerX: Story = {};
