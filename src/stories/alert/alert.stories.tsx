import { ComponentStory, ComponentMeta } from "@storybook/react";

// Component
import { Alert } from "../../index";

// Layout
import "./alert.css";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    className: { control: { disable: true } },
    backgroundColor: { control: "color" },
    iconBackgroundColor: { control: "color" },
    iconColor: { control: "color" },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "high",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  iconColor: "#ca2121",
};
export const High = Template.bind({});
High.args = {
  type: "high",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  iconColor: "#ca2121",
};

export const Medium = Template.bind({});
Medium.args = {
  type: "medium",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  iconColor: "#dcb313",
};

export const Low = Template.bind({});
Low.args = {
  type: "low",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  iconColor: "#1853ac",
};
