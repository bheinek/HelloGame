import { Meta, StoryFn } from "@storybook/react";
import { Header } from "./Header";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  component: Header,
  title: "Components/Layouts/Header",
  tags: ["Header"],
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = ({ ...rest }) => {
  return <Header {...rest}></Header>;
};

export const Default = Template.bind({});
Default.args = {
  level: "h1",
};

export const HeaderLevel2 = Template.bind({});
HeaderLevel2.args = {
  gameName: "test Games",
  level: "h2",
};
