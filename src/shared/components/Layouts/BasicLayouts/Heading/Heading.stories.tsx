import { Meta, StoryFn } from "@storybook/react";
import { Heading } from "./Heading";
import { withRouter } from "storybook-addon-react-router-v6";
import { headerBaseStyles } from "./utils";

export default {
  component: Heading,
  title: "Shared/Components/BasicLayouts/Header",
  tags: ["Header"],
  argTypes: {
    variant: {
      options: Object.keys(headerBaseStyles),
      control: { type: "select" },
    },
  },
  decorators: [withRouter],
} as Meta<typeof Heading>;

const Template: StoryFn<typeof Heading> = ({ ...rest }) => {
  return <Heading {...rest}></Heading>;
};

export const Default = Template.bind({});
Default.args = {
  children: "test header",
  variant: "h1",
};
