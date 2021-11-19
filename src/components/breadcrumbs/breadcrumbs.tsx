import "./breadcrumbs.css";

export type BreadcrumbsProps = {
  nodes: {
    displayName: string;
    uri: string;
    id: string;
    isCurrent?: boolean;
  }[];
  separator: string | React.SVGProps<SVGSVGElement> | null;
};

export function Breadcrumbs({ nodes, separator }: BreadcrumbsProps) {
  if (!nodes || !nodes.length) return null;

  return (
    <div className="breadcrumbs">
      <ol className="breadcrumbs__list">
        {nodes.map((node, index) => {
          const currentNode = node.isCurrent ? "current" : "";
          return (
            <>
              {separator && index !== 0 && (
                <span
                  className="breadcrumbs__list-separator"
                  aria-hidden="true"
                >
                  {separator}
                </span>
              )}
              <li
                className={["breadcrumbs__list-item", currentNode].join(" ")}
                key={node.id}
              >
                <a className="breadcrumbs__link" href={node.uri}>
                  {node.displayName}
                </a>
              </li>
            </>
          );
        })}
      </ol>
    </div>
  );
}
