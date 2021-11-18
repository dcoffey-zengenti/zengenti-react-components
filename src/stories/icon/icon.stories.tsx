import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from "../../index";
//import "./icons.css";

export default {
  title: "Example/Icons",
  component: Icon,
  argTypes: {
    fill: { control: "color" },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const YouTube = Template.bind({});

YouTube.args = {
  height: 24,
  width: 24,
  viewBox: "0 0 24 24",
  className: "youtube",
};
