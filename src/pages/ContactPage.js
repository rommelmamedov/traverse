import clsx from "clsx";
import { useIsMobileBreakpoint } from "../hooks/useIsMobileBreakpoint";
import PageLayout from "../layouts/pageLayout";
import SectionSignUp from "../components/SectionSignUp";
import HeroBg from "../assets/images/contact-hero-bg.webp";
import HeroBgMobile from "../assets/images/contact-hero-bg-mobile.webp";
import styles from "../styles/ContactPage.module.scss";

function ContactPage() {
  const isMobileBreakpoint = useIsMobileBreakpoint();

  return (
    <PageLayout
      pageTitle="Get In Touch"
      pageClass={clsx(styles.contactPage, "contactPage")}
      isFullFooter
    >
      <section className="sectionContact">
        <div className="sectionContactBg" />

        <div className="container">
          <h1 className="sectionContactTitle">
            Traverse Labs prides itself on being transparent, especially when it
            comes to your crypto and asset management
          </h1>
        </div>
      </section>

      <section className="sectionContactHero">
        {isMobileBreakpoint ? (
          <img src={HeroBgMobile} alt="Hero background" />
        ) : (
          <img src={HeroBg} alt="Hero background" />
        )}

        <div className="sectionContactHeroTextWrapper">
          <div className="container">
            <div className="sectionContactHeroText">
              <h2 className="sectionContactHeroTitle h1">
                Have unanswered questions?
              </h2>

              <h3 className="sectionContactHeroSubtitle">
                Our team is on standby, get in touch with us today!
              </h3>

              <a
                className="button"
                href="mailto:contact@traverselabs.xyz"
                rel="noreferrer"
                target="_blank"
                title="Contact Traverse"
              >
                Contact Traverse
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionSignUp />
    </PageLayout>
  );
}

export default ContactPage;
