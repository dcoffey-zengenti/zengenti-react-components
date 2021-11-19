import React from "react";

interface ButtonProps {
  className?: string;
  type: "button" | "submit" | "reset";
  isPrimary: boolean;
  isDisabled: boolean;
  label: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  backgroundColor?: string;
  textColor?: string;
}

export const Button = ({
  className,
  type = "button",
  isPrimary = true,
  isDisabled = false,
  label,
  onClick,
  backgroundColor,
  textColor,
}: ButtonProps) => {
  const _handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick && !isDisabled) onClick(e);
  };

  return (
    <button
      style={{ backgroundColor, color: textColor }}
      type={type}
      className={[className, `btn ${isPrimary ? "primary" : "secondary"}`].join(
        " "
      )}
      disabled={isDisabled}
      onClick={(e) => _handleClick(e)}
    >
      {label}
    </button>
  );
};
