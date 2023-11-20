import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";
import { buttonSizes, buttonVariants } from "./utils";

export default {
  component: Button,
  title: "Shared/Components/BasicElements/Button",
  tags: ["Button"],
  argTypes: {
    variant: {
      options: Object.keys(buttonVariants),
      control: { type: "select" },
    },
    size: {
      options: Object.keys(buttonSizes),
      control: { type: "select" },
    },
  },
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ ...rest }) => {
  return <Button {...rest} />;
};

export const Default = Template.bind({});
Default.args = {
  children: "Lorem Ipsum",
  variant: "primary",
  size: "md",
};
