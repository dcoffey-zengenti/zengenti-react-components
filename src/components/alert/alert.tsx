import React, { useState } from "react";
import { Icon } from "../icon";

export interface AlertProps {
  className?: string;
  type: "high" | "low" | "medium";
  text: string;
  iconColor?: string;
  backgroundColor?: string;
  iconBackgroundColor?: string;
}

export const Alert = ({
  className,
  type = "high",
  text,
  iconColor = "#000",
  backgroundColor,
  iconBackgroundColor,
}: AlertProps) => {
  const [isClosed, setIsClosed] = useState<boolean>(false);
  const _handleClose = () => setIsClosed(true);

  return (
    <>
      {!isClosed && (
        <div
          className={`${className} alert alert-${type}`}
          style={{ backgroundColor }}
        >
          <div
            className="alert-icon__wrapper"
            style={{ backgroundColor: iconBackgroundColor }}
          >
            <Icon
              height={24}
              width={24}
              viewBox="0 0 15 15"
              fill={iconColor}
              type={
                type === "low"
                  ? "information"
                  : type === "medium"
                  ? "question"
                  : "warning"
              }
            />
          </div>
          <p className="alert-text">{text}</p>
          <button
            type="button"
            className="alert-btn--close"
            onClick={() => _handleClose()}
          >
            <span className="sr-only">Close</span>
            <Icon type="close" viewBox="0 0 24 24" height={16} width={16} />
          </button>
        </div>
      )}
    </>
  );
};
