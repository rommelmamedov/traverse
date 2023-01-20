import React from 'react';
import {walletManagementAccordion, walletManagementFeatureCards} from "../landingPagesMock";
import HomePageFeatureCard from "./HomePageFeatureCard";
import Accordion from "./common/Accordion";

function HomepageTabWalletManagement() {

  return (
    <section className="SectionTabWalletManagement">

      <section className="sectionFeatures">

        <div className="container">

          <h2 className="sectionFeaturesTitle">
            Traverse is a wallet management dashboard that allows you to view, manage, and secure all your tokens in one place
          </h2>

          <ul className="featureCards">
            {walletManagementFeatureCards.map((item, idx) => (

              <li key={idx} className="featureCardsItem">

                <HomePageFeatureCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />

              </li>
            ))}

          </ul>

        </div>

      </section>

      <section className="sectionFaqs">

        <div className="container">

          <h2 className="sectionFaqsTitle">
            About our wallet management
          </h2>

          <Accordion
            list={walletManagementAccordion}
          />

        </div>

      </section>

    </section>
  )
}

export default HomepageTabWalletManagement;