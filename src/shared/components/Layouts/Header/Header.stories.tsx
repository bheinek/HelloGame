import { Meta, StoryFn } from "@storybook/react";
import { Header } from "./Header";
import { LEVEL } from "../../../utils/const";
import { withRouter } from "storybook-addon-react-router-v6";

export default {
  component: Header,
  title: "Layouts/Header",
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
Default.args = {};

export const HeaderLevel2 = Template.bind({});
HeaderLevel2.args = {
  level: LEVEL.l2,
};
