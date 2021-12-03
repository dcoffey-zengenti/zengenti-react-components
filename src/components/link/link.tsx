import React from "react";
import { Link as PageLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface LinkProps {
  className?: string;
  title?: string;
  uri: string;
  download?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  openInNewWindow?: boolean;
}
interface LinkPropsWithText extends LinkProps {
  text: string;
  children?: React.ReactNode;
}
interface LinkPropsWithChildren extends LinkProps {
  text?: string;
  children: React.ReactNode;
}

type Props = LinkPropsWithText | LinkPropsWithChildren;

export const Link = ({
  className,
  title,
  uri,
  download,
  children,
  text,
  onClick,
  openInNewWindow = false,
}: Props) => {
  if (!uri) return <span className={className}>{children}</span>;

  const newWindow = openInNewWindow ? "_blank" : "_self";
  uri = encodeURI(uri);

  if (newWindow !== "_blank" && uri && uri.startsWith("/")) {
    if (uri.indexOf("#") > -1) {
      return (
        <HashLink
          className={className}
          download={download}
          onClick={onClick}
          title={title}
          to={uri}
        >
          {children || text}
        </HashLink>
      );
    } else {
      return (
        <PageLink
          className={className}
          download={download}
          onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            if (onClick) onClick(e);
          }}
          title={title}
          to={uri}
        >
          {children || text}
        </PageLink>
      );
    }
  } else {
    return (
      <a
        className={className}
        download={download}
        href={uri}
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
          if (onClick) onClick(e);
        }}
        target={newWindow}
        title={title}
        rel="noopener noreferrer"
      >
        {children || text}
      </a>
    );
  }
};
