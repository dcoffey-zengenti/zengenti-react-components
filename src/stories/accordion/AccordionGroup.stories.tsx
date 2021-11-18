import { ComponentStory, ComponentMeta } from "@storybook/react";

// Component & Modal
import { Accordion, AccordionItemProps } from "../../index";

// Layout
import "./Accordion.css";

export default {
  title: "Components/Accordion/Group",
  component: Accordion,
  argTypes: {
    className: { control: { disable: true } },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  return <Accordion {...args} />;
};

const items: AccordionItemProps[] = [
  {
    title: "Accordion title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh.t tortor.",
  },
  {
    title: "Accordion title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh.t tortor.",
  },
  {
    title: "Accordion title",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing vitae aliquam volutpat nibh duis enim mi nibh.t tortor.",
  },
];

export const Primary = Template.bind({});
Primary.args = {
  title: "Accordion title",
  items,
};
