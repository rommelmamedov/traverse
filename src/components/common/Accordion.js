import React, {useCallback, useRef, useState} from 'react';
import DOMPurify from 'dompurify';
import clsx from "clsx";
import {useOnClickOutside} from "usehooks-ts";
import Button from "./Button";
import {ReactComponent as IcnAccordion} from "../../assets/icons/icn-plus.svg";
import styles from "../../styles/Accordion.module.scss";

function Accordion({extraClass, list }) {
  const accordionRef = useRef(null);
  const [accordionOpen, setAccordionOpen] = useState(-1);

  const handleAccordionOpen = (index) => {
    if (index === accordionOpen) {
      setAccordionOpen(-1);
    } else {
      setAccordionOpen(index);
    }
  };

  const handleCloseAccordion = useCallback(() => setAccordionOpen(-1), []);
  useOnClickOutside(accordionRef, handleCloseAccordion);

  return (
    <ul
      ref={accordionRef}
      className={clsx(styles.accordion, "accordion", extraClass && extraClass)}
    >

      {list && list?.map((item, idx) => {
        const ItemContent = DOMPurify.sanitize(item.content);

        return (
          <li className="accordionItem" key={idx}>

            <Button
              extraClass={clsx("accordionToggle", accordionOpen === idx && "isOpen")}
              aria-expanded={accordionOpen === idx}
              aria-controls={`${item.title}`}
              aria-disabled={accordionOpen === idx}
              onClick={() => handleAccordionOpen(idx)}
            >

              <span className="accordionToggleText">
                {item.title}
              </span>

              <span className="accordionToggleIcon">
                <IcnAccordion/>
              </span>

            </Button>

            <div className={clsx("accordionContent", accordionOpen === idx && "isOpen")}>

              <div
                className="accordionContentWrapper"
                dangerouslySetInnerHTML={{ __html: ItemContent }}
              />

            </div>

          </li>
        )
      })}

    </ul>
  )
}

export default Accordion;