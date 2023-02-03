import {
  businessSolutionsFeatureCards,
  businessSolutionsAccordion,
} from "../landingPagesMock";
import HomePageFeatureCard from "./HomePageFeatureCard";
import Accordion from "./common/Accordion";

function HomePageTabBusinessSolutions() {
  return (
    <section className="sectionTab sectionTabBusinessSolutions">
      <section className="sectionFeatures">
        <div className="container">
          <h2 className="sectionFeaturesTitle">
            The ultimate solution for businesses who want to receive or send
            cryptocurrency payments in an approach that addresses the
            limitations of cryptocurrency as a payment system
          </h2>

          <ul className="featureCards">
            {businessSolutionsFeatureCards.map((item, idx) => (
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
          <h2 className="sectionFaqsTitle">About our business solutions</h2>

          <Accordion list={businessSolutionsAccordion} />
        </div>
      </section>
    </section>
  );
}

export default HomePageTabBusinessSolutions;
