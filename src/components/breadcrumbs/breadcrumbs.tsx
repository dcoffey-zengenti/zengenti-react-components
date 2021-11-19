import React, { Fragment } from "react";
import "./breadcrumbs.css";

export type BreadcrumbsProps = {
  nodes: {
    displayName: string;
    uri: string;
    id: string;
    isCurrent?: boolean;
  }[];
  /**
   Can be an SVG or simple bit of text, even an emoji
  */
  separator?: string | React.SVGProps<SVGSVGElement> | null;
};

export function Breadcrumbs({ nodes, separator = ">" }: BreadcrumbsProps) {
  if (!nodes || !nodes.length) return null;

  return (
    <div className="breadcrumbs">
      <ol className="breadcrumbs__list">
        {nodes.map((node, index) => {
          const currentNode = node.isCurrent ? "current" : "";
          return (
            <Fragment key={node.id}>
              {separator && index !== 0 && (
                <span
                  className="breadcrumbs__list-separator"
                  aria-hidden="true"
                >
                  {separator}
                </span>
              )}
              <li className={["breadcrumbs__list-item", currentNode].join(" ")}>
                <a className="breadcrumbs__link" href={node.uri}>
                  {node.displayName}
                </a>
              </li>
            </Fragment>
          );
        })}
      </ol>
    </div>
  );
}
