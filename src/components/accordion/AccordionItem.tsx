import { useEffect, useState } from "react";

export interface AccordionItemProps {
  className?: string;
  title: string;
  content: string;
  idx?: number;
  pOpen?: boolean | undefined;
  _handleToggle?: (idx: number) => void;
}

export const AccordionItem = ({
  className,
  title,
  content,
  idx = 1,
  pOpen,
  _handleToggle,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(pOpen);

  const _handleClick = () => {
    if (pOpen === undefined) setIsOpen(!isOpen);
    else if (_handleToggle) _handleToggle(idx);
  };

  useEffect(() => {
    setIsOpen(pOpen);
  }, [pOpen]);

  return (
    <div className={`${className} accordion-item`}>
      <button
        type="button"
        onClick={() => _handleClick()}
        aria-expanded={isOpen ? true : false}
        className="accordion-item__btn"
      >
        {title}
      </button>
      {isOpen && (
        <div
          className="accordion-item__content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
};
