import React from 'react';
import clsx from "clsx";
import landingFooterBg from "../../assets/images/footer-landing-page-bg.webp";
import { BsMedium } from "react-icons/bs";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";
import styles from '../../styles/Footer.module.scss';

const footerSocialLinks = [
  {name: "Medium", url: "", icon:<BsMedium/>},
  {name: "Telegram", url: "", icon: <FaTelegramPlane/>},
  {name: "Discord", url: "", icon: <FaDiscord/>},
  {name: "Twitter", url: "", icon: <FaTwitter/>}
]

function Footer({isLandingPageFooter}) {
  return (
    <footer className={clsx(styles.footer, "footer", isLandingPageFooter && styles.footerLandingPage)}>

      {isLandingPageFooter &&
        <img className="footerLandingPageBg" src={landingFooterBg} alt="Footer background"/>
      }

      <section className="sectionFooter">

        <div className="footerLeftWrapper">
          <span>©2022 Traverse Labs Inc.</span>

          <ul className="staticPagesList listUnstyled">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div className="footerRightWrapper">
          <ul className="socialLinksList listUnstyled">
            {footerSocialLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  title={link.name}
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </section>

    </footer>
  )
}

export default Footer;