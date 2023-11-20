import { Meta, StoryFn } from "@storybook/react";

import { Card } from "./Card";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  component: Card,
  title: "Shared/Components/BasicElements/Card",
  tags: ["Card"],
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = ({ ...rest }) => {
  return <Card {...rest}></Card>;
};

export const Default = Template.bind({});
Default.args = {
  children: "some content",
  isInactive: false,
  isSelected: false,
};

export const CardWithLink = Template.bind({});
CardWithLink.args = {
  children: "some content with Link",
  isInactive: false,
  isSelected: false,
  link: "./",
};
