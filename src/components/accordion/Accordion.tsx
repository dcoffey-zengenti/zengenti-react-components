import { useEffect, useState } from "react";

// Components & Modal
import { AccordionItem, AccordionItemProps } from "./accordionItem";

export interface AccordionProps {
  className?: string;
  items: AccordionItemProps[];
  title?: string;
}

export const Accordion = ({ className, items, title }: AccordionProps) => {
  const [isAllOpen, setIsAllOpen] = useState<boolean>(false);
  const [wrapperAccordions, setWrapperAccordions] = useState<any>();
  const btnText = isAllOpen ? "Close all" : "Open all";

  useEffect(() => {
    setWrapperAccordions(
      items.map((item: any) => {
        return { ...item, isOpen: false };
      })
    );
  }, [items]);

  const _handleToggleAll = () => {
    const toggledState = !isAllOpen;
    setWrapperAccordions(
      wrapperAccordions &&
        wrapperAccordions.map((item: any) => {
          return { ...item, isOpen: toggledState };
        })
    );
    setIsAllOpen(toggledState);
  };

  const _handleToggle = (indexIn: number) => {
    setWrapperAccordions(
      wrapperAccordions &&
        wrapperAccordions.map((item: any, index: number) => {
          if (indexIn === index) {
            return { ...item, isOpen: !item.isOpen };
          } else {
            return item;
          }
        })
    );
  };

  useEffect(() => {
    if (wrapperAccordions) {
      setIsAllOpen(
        wrapperAccordions.every((item: any) => item.isOpen === true)
      );
    }
  }, [wrapperAccordions]);

  if (!items || items.length < 1) return null;
  return (
    <div className={`${className} accordion__wrapper`}>
      <div className="accordion__header">
        {title && <h2 className="accordion__header-title">{title}</h2>}
        <button
          className="accordion__header-btn"
          type="button"
          onClick={() => _handleToggleAll()}
        >
          {btnText}
        </button>
      </div>
      {wrapperAccordions &&
        wrapperAccordions.map((item: any, idx: number) => {
          return (
            <AccordionItem
              key={idx}
              title={item.title}
              content={item.content}
              pOpen={item.isOpen}
              _handleToggle={_handleToggle}
              idx={idx}
            />
          );
        })}
    </div>
  );
};
