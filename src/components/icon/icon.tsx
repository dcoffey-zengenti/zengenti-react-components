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

export interface IconProps {
  fill?: string;
  label?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  type?:
    | "close"
    | "collapse"
    | "email"
    | "expand"
    | "facebook"
    | "facebookRev"
    | "information"
    | "instagram"
    | "linkedin"
    | "linkedinRev"
    | "question"
    | "tiktok"
    | "twitter"
    | "warning"
    | "youtube";
}

export const Icon = ({
  fill,
  label,
  width,
  height,
  viewBox,
  type,
  ...props
}: IconProps) => {
  if (!type || !iconDictionary[type]) return null;
  return (
    <svg
      role="img"
      aria-label={label}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`icon--${type}`}
      fill={fill}
      {...props}
    >
      {iconDictionary[type]}
    </svg>
  );
};
