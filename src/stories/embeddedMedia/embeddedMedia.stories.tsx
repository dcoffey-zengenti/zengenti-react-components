import { ComponentStory, ComponentMeta } from "@storybook/react";

import { EmbeddedMedia } from "../../index";
import "./styles.css";

export default {
  title: "Components/EmbeddedMedia",
  component: EmbeddedMedia,
  argTypes: {},
} as ComponentMeta<typeof EmbeddedMedia>;

const Template: ComponentStory<typeof EmbeddedMedia> = (args) => (
  <EmbeddedMedia {...args} />
);

export const Youtube = Template.bind({});
Youtube.args = {
  placeholderImage: "/media/youtube-placeholder.jpg",
  imageAlt: "World's smallest cat",
  src: "https://www.youtube.com/embed/W86cTIoMv2U",
  caption: "World's smallest cat",
  title: "YouTube video player",
  width: 560,
  height: 315,
  allow:
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;",
};

export const Vimeo = Template.bind({});
Vimeo.args = {
  placeholderImage: "/media/vimeo-placeholder.jpg",
  imageAlt: "Test Video",
  src: "https://player.vimeo.com/video/226053498",
  caption: "Test Video",
  title: "Test Video",
  width: 640,
  height: 360,
  allow: "autoplay; fullscreen; picture-in-picture",
};
