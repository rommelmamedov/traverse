import React from 'react';
import clsx from "clsx";
import {useIsMobileBreakpoint} from "../../hooks/useIsMobileBreakpoint";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterLinks from "./FooterLinks";
import landingFooterBg from "../../assets/images/footer-landing-page-bg.webp";
import landingFooterBgMobile from "../../assets/images/footer-landing-page-bg-mobile.webp";
import styles from '../../styles/Footer.module.scss';

function Footer({isLandingPageFooter}) {

  const isMobileBreakpoint = useIsMobileBreakpoint();

  return (
    <footer className={clsx(styles.footer, "footer", isLandingPageFooter && styles.footerLandingPage)}>

      {isLandingPageFooter &&
      <>
        {isMobileBreakpoint? (
          <img className="footerLandingPageBg" src={landingFooterBgMobile} alt="Footer background"/>
        ): (
          <img className="footerLandingPageBg" src={landingFooterBg} alt="Footer background"/>
        )}
      </>
      }

      <section className="sectionFooter">

        <span className="footerCopyright">
          ©2022 Traverse Labs Inc.
        </span>

        <FooterLinks/>

        <FooterSocialLinks/>

      </section>

    </footer>
  )
}

export default Footer;
