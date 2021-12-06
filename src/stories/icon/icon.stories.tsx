import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon, IconDictionary } from "../../index";

//page furniture icons
import Close from "./assets/close";
import Collapse from "./assets/collapse";
import Email from "./assets/email";
import Expand from "./assets/expand";
import Information from "./assets/information";
import Question from "./assets/question";
import Warning from "./assets/warning";

// social icons
import Facebook from "./assets/facebook";
import FacebookRev from "./assets/facebookRev";
import Instagram from "./assets/instagram";
import Linkedin from "./assets/linkedin";
import LinkedinRev from "./assets/linkedinRev";
import Tiktok from "./assets/tiktok";
import Twitter from "./assets/twitter";
import YouTube from "./assets/youtube";

const iconDictionary = {
  close: <Close />,
  collapse: <Collapse />,
  email: <Email />,
  expand: <Expand />,
  facebook: <Facebook />,
  facebookRev: <FacebookRev />,
  information: <Information />,
  instagram: <Instagram />,
  linkedin: <Linkedin />,
  linkedinRev: <LinkedinRev />,
  question: <Question />,
  tiktok: <Tiktok />,
  twitter: <Twitter />,
  warning: <Warning />,
  youtube: <YouTube />,
};

export default {
  title: "Components/Icons",
  component: Icon,
  argTypes: {
    fill: { control: "color" },
    type: { control: { type: "select", options: Object.keys(iconDictionary) } },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconSelector = Template.bind({});
IconSelector.decorators = [
  (story) => (
    <IconDictionary.Provider value={iconDictionary}>
      {story()}
    </IconDictionary.Provider>
  ),
];

IconSelector.args = {
  height: 24,
  width: 24,
  viewBox: "0 0 24 24",
  fill: "#f0f",
  type: "twitter",
};
