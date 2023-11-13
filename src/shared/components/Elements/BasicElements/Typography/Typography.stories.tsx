import { Meta, StoryFn } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  component: Typography,
  title: "Components/BasicElements/Typography",
  tags: ["Typography"],
  argTypes: {
    level: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "body1"],
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Typography>;

const Template: StoryFn<typeof Typography> = ({ ...rest }) => {
  return <Typography {...rest} />;
};

export const Default = Template.bind({});
Default.args = {
  children: "Lorem Ipsum",
  level: "h1",
};
