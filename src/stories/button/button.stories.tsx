import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../../index";
import "./button.css";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    className: { control: { disable: true } },
    onClick: { control: { disable: true } },
    backgroundColor: { control: "color" },
    textColor: { control: "color" },
    borderColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
  isDisabled: false,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  isPrimary: false,
  isDisabled: false,
  label: "Button",
};
