import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useIsMobileBreakpoint } from "../../hooks/useIsMobileBreakpoint";
import LogoLight from "../../assets/logos/traverse-logo.svg";
import LogoDark from "../../assets/logos/traverse-logo-dark.svg";
import styles from "../../styles/Logo.module.scss";

function Logo({ extraClass }) {
  const isMobileBreakpoint = useIsMobileBreakpoint();
  return (
    <Link
      to="/"
      className={clsx(styles.navLogo, "navLogo", extraClass && extraClass)}
      title="Home"
    >
      {isMobileBreakpoint ? (
        <span className="navLogoImageWrapper">
          <span className="front">
            <img src={LogoDark} alt="Traverse Logo" />
          </span>
          <span className="back">
            <img src={LogoLight} alt="Traverse Logo" />
          </span>
        </span>
      ) : (
        <img className="navLogoImage" src={LogoLight} alt="Traverse Logo" />
      )}
    </Link>
  );
}

export default Logo;
