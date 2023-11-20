import { Meta, StoryFn } from "@storybook/react";
import { Typography } from "./Typography";
import { textVariants } from "./utils";

export default {
  component: Typography,
  title: "Shared/Components/BasicElements/Typography",
  tags: ["Typography"],
  argTypes: {
    variant: {
      options: Object.keys(textVariants),
      control: { type: "select" },
    },
    as: {
      options: Object.keys(textVariants),
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
  variant: "h1",
  as: "h1",
};
