import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Component
import { AccordionItem } from "../../index";

// Layout
import "./accordion.css";

export default {
  title: "Components/Accordion/Single",
  component: AccordionItem,
  argTypes: {
    className: { control: { disable: true } },
    pOpen: { control: { disable: true } },
    idx: { control: { disable: true } },
    _handleToggle: { control: { disable: true } },
  },
} as ComponentMeta<typeof AccordionItem>;

const Template: ComponentStory<typeof AccordionItem> = (args) => {
  return <AccordionItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Accordion title",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh.t tortor.",
};
