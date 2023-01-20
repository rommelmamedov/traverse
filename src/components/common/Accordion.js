import React, {useState} from 'react';
import DOMPurify from 'dompurify';
import clsx from "clsx";
import Button from "./Button";
import {ReactComponent as IcnAccordion} from "../../assets/icons/icn-plus.svg";
import styles from "../../styles/Accordion.module.scss";

function Accordion({extraClass, list }) {
  const [accordionOpen, setAccordionOpen] = useState(-1);

  const handleAccordionOpen = (index) => {
    if (index === accordionOpen) {
      setAccordionOpen(-1);
    }
    setAccordionOpen(index);
  };

  return (
    <ul className={clsx(styles.accordion, "accordion", extraClass && extraClass)}>

      {list && list?.map((item, idx) => {
       const ItemContent = DOMPurify.sanitize(item.content);

        return (
        <li className="accordionItem" key={idx}>

          <Button extraClass={clsx("accordionToggle", accordionOpen === idx && "isOpen")}
                  onClick={() => handleAccordionOpen(idx)}>

            <span className="accordionToggleText">
              {item.title}
            </span>

            <span className="accordionToggleIcon">
              <IcnAccordion/>
            </span>

          </Button>

          <div className={clsx("accordionContent", accordionOpen === idx && "isOpen")}>

            <div className="accordionContentWrapper">
               <div dangerouslySetInnerHTML={{ __html: ItemContent }}/>
            </div>

          </div>

        </li>
        )
      })}

    </ul>
  )
}

export default Accordion;