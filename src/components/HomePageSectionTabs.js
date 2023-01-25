import React, {useState} from 'react';
import clsx from "clsx";
import Button from "./common/Button";
import HomepageTabWalletManagement from "./HomePageTabWalletManagement";
import HomePageTabBusinessSolutions from "./HomePageTabBusinessSolutions";
import styles from '../styles/HomePageSectionTabs.module.scss';

const homeTabs = [
  {buttonTitle: "Wallet Management", content: <HomepageTabWalletManagement/> },
  {buttonTitle: "Business Solutions", content: <HomePageTabBusinessSolutions/> },
]

function HomePageSectionTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = index => setActiveIndex(index);
  const checkActive = (index, className) => (activeIndex === index ? className : '');

  return (
    <section className={clsx(styles.homePageTabs)}>

      <div className="container">

        <ul className="customTabs tabNav">
          {homeTabs.map((item, idx) => (
            <li key={idx}>
              <Button
                extraClass={clsx("tabButton", item.content === null ? 'disabled' : checkActive(idx, 'active'))}
                onClick={() => handleClick(idx)}
                text={item.buttonTitle}
              />
            </li>
          ))}
        </ul>

      </div>

      <div className="customTabs tabPanel">
        {homeTabs.map((item, idx) => {
          if (activeIndex === idx) {
            return <div key={idx} className={`panel ${checkActive(idx, 'active')}`}>{item.content}</div>
          } else {
            return null;
          }
        })}
      </div>

      <div className="homePageTabsBg animateHomeFeatureBg"/>

    </section>
  )
}

export default HomePageSectionTabs;