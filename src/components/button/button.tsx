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
  borderColor?: string;
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
  borderColor,
}: ButtonProps) => {
  const _handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) onClick(e);
  };

  return (
    <button
      style={{ backgroundColor, color: textColor, borderColor }}
      type={type}
      className={`${className} btn ${isPrimary ? "primary" : "secondary"}`}
      disabled={isDisabled}
      onClick={(e) => _handleClick(e)}
    >
      {label}
    </button>
  );
};
