import { Meta, StoryFn } from "@storybook/react";
import { OverviewGrid } from "./OverviewGrid";
import { withRouter } from "storybook-addon-react-router-v6";
import { GamesCard } from "../_index";
import { GameCard } from "../../../utils/types";

export default {
  component: OverviewGrid,
  title: "Components/Elements/OverviewGrid",
  tags: ["OverviewGrid"],
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
} as Meta<typeof OverviewGrid>;

const mockGames: GameCard[] = [
  {
    title: "Pong Game",
    img: "src/shared/assets/_storybook/pongCover.png",
    route: "./",
  },
  {
    title: "ticTacToe Game",
    img: "src/shared/assets/_storybook/ticTacToeCover.png",
    route: "./",
  },
];

const Template: StoryFn<typeof OverviewGrid> = ({ ...rest }) => {
  return (
    <OverviewGrid {...rest}>
      {mockGames.map((game) => (
        <GamesCard game={game} />
      ))}
    </OverviewGrid>
  );
};

export const Default = Template.bind({});
Default.args = {};
