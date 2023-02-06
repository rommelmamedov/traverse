import clsx from "clsx";
import PageLayout from "../layouts/pageLayout";
//import Button from "../components/common/Button";
import HomePageSectionTabs from "../components/HomePageSectionTabs";
import SectionSignUp from "../components/SectionSignUp";
import styles from "../styles/HomePage.module.scss";

function HomePage() {
  return (
    <PageLayout
      pageTitle="Home"
      pageClass={clsx(styles.homePage, "homePage")}
      isFullFooter
    >
      <section className="homePageSectionHeader">
        <div className="container">
          <div className="homePageSectionHeaderWrapper">
            <div className="homePageSectionHeaderTextWrapper">
              {/* <p className="sectionHeading">
                The securest way to manage your portfolio on one platform
              </p> */}

              <h1>Explore the blockchain with your mind at ease</h1>

              {/* <p className="sectionSubtitle">
                We have a live demo.&nbsp;
                <a
                  href="www.google.com"
                  rel="noreferrer"
                  target="_blank"
                  className="sectionLink"
                >
                  Check it out
                </a>
              </p> */}

              {/* <Button text="Launch the App" /> */}
            </div>
          </div>
        </div>

        <div className="homePageHeaderBg" />
      </section>

      <HomePageSectionTabs />

      <SectionSignUp extraClass="homePageSectionSignUp" isOrange />
    </PageLayout>
  );
}
export default HomePage;
