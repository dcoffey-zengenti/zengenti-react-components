import { ComponentStory, ComponentMeta } from "@storybook/react";

import { BlockQuote } from "../../index";
import "./styles.css";

export default {
  title: "Components/BlockQuote",
  component: BlockQuote,
} as ComponentMeta<typeof BlockQuote>;

const Template: ComponentStory<typeof BlockQuote> = (args) => (
  <BlockQuote {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cite: "Brave New World",
  citeUrl: "https://www.huxley.net/bnw/four.html",
  quote:
    "Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.",
};
