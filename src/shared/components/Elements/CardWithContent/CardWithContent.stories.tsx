import { Meta, StoryFn } from "@storybook/react";
import { CardWithContent } from "./CardWithContent";

export default {
  component: CardWithContent,
  title: "Shared/Elements/Card With Content",
  tags: ["CardWithContent"],
  parameters: {
    layout: "centered",
  },
} as Meta<typeof CardWithContent>;

const Template: StoryFn<typeof CardWithContent> = ({ ...rest }) => {
  return <CardWithContent {...rest}></CardWithContent>;
};

export const Default = Template.bind({});
Default.args = {
  title: "Testing Card",
  image: "src/shared/assets/_storybook/placeholder.png",
  description: "This is the testing card",
};

export const CardWithLink = Template.bind({});
CardWithLink.args = {
  title: "Card with link",
  image: "src/shared/assets/_storybook/placeholder.png",
  description: "This is the testing card",
  link: "./home",
};
