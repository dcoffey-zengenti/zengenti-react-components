import React, { createContext, useContext } from "react";

export const IconDictionary = createContext<{
  [key: string]: React.ReactChild;
}>({});

export interface IconProps {
  fill?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  type?: string;
}

export const Icon = ({
  fill,
  width,
  height,
  viewBox,
  type,
  ...props
}: IconProps) => {
  const iconDictionary = useContext(IconDictionary);
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
