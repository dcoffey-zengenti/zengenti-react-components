import { useState } from "react";

export interface EmbeddedMediaProps {
  className?: string;
  src: string;
  caption: string;
  width?: number;
  height?: number;
  title: string;
  allow?: string;
  placeholderImage: string;
  imageAlt: string;
}

import "./styles.css";

export const EmbeddedMedia = ({
  src,
  caption,
  width,
  height,
  title,
  allow,
  placeholderImage,
  imageAlt,
  className,
}: EmbeddedMediaProps) => {
  const [showIframe, setShowIframe] = useState(false);
  const handleClick = () => setShowIframe(true);

  return (
    <figure className={["embedded-media", className].join(" ")}>
      {showIframe ? (
        <div className="embedded-media__wrapper-iframe">
          <iframe
            src={src}
            width={width}
            height={height}
            title={title}
            allow={allow}
            frameBorder="0"
          ></iframe>
        </div>
      ) : (
        <div className="embedded-media__wrapper-image">
          <button onClick={handleClick} className="embedded-media__play">
            <span className="embedded-media__play--text">Play video</span>
            <i className="embedded-media__play--text--icon"></i>
          </button>
          <img
            src={placeholderImage}
            alt={imageAlt}
            className="embedded-media__placeholder"
          />
        </div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
