import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Icon } from "../../index";
//import "./icons.css";

export default {
  title: "Components/Icons",
  component: Icon,
  argTypes: {
    fill: { control: "color" },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconSelect = Template.bind({});

IconSelect.args = {
  height: 24,
  width: 24,
  viewBox: "0 0 24 24",
  type: undefined,
};
