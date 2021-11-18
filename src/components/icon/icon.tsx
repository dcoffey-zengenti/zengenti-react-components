//page furniture icons
import Close from "./assets/close";
import Collapse from "./assets/collapse";
import Expand from "./assets/expand";

// social icons
import Facebook from "./assets/facebook";
import Information from "./assets/information";
import Linkedin from "./assets/linkedin";
import Question from "./assets/question";
import Twitter from "./assets/twitter";
import Warning from "./assets/warning";
import YouTube from "./assets/youtube";

const iconDictionary = {
  close: <Close />,
  collapse: <Collapse />,
  expand: <Expand />,
  facebook: <Facebook />,
  linkedin: <Linkedin />,
  twitter: <Twitter />,
  youtube: <YouTube />,
  information: <Information />,
  question: <Question />,
  warning: <Warning />,
};

export interface IconProps {
  fill?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  type?:
    | "close"
    | "collapse"
    | "expand"
    | "facebook"
    | "linkedin"
    | "twitter"
    | "youtube"
    | "information"
    | "question"
    | "warning";
}

export const Icon = ({
  fill,
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
