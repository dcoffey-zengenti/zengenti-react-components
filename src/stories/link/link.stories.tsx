import { ComponentStory, ComponentMeta } from "@storybook/react";
import reactRouterDecorator from "../../../.storybook/decorators/react-router";

import { Link } from "../../index";
import "./link.css";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    className: { control: { disable: true } },
    onClick: { control: { disable: true } },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [reactRouterDecorator];
Primary.args = {
  title: "Example link title",
  text: "Example link",
  uri: "www.google.co.uk",
  openInNewWindow: false,
  download: false,
};
