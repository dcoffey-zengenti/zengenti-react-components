//page furniture icons
import Close from "./assets/close";
import Collapse from "./assets/collapse";
import Email from "./assets/email";
import Expand from "./assets/expand";

// social icons
import Facebook from "./assets/facebook";
import Linkedin from "./assets/linkedin";
import Twitter from "./assets/twitter";
import YouTube from "./assets/youtube";

const iconDictionary = {
  close: <Close />,
  collapse: <Collapse />,
  email: <Email />,
  expand: <Expand />,
  facebook: <Facebook />,
  linkedin: <Linkedin />,
  twitter: <Twitter />,
  youtube: <YouTube />,
};

export interface IconProps {
  fill?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  type?:
    | "close"
    | "collapse"
    | "email"
    | "expand"
    | "facebook"
    | "linkedin"
    | "twitter"
    | "youtube";
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
