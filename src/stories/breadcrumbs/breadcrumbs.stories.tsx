import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Breadcrumbs } from "../../index";
import "./styles.css";
import { nodesTrail } from "./mock";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    nodes: nodesTrail,
  },
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  nodes: nodesTrail,
  separator: "/",
};
