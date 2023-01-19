import React from 'react';
import clsx from "clsx";
import {Link} from "react-router-dom";
import LogoImage from "../../assets/logos/traverse-logo.png";
import styles from '../../styles/Logo.module.scss';

function Logo({extraClass, disabled}) {
  return (
    <Link
      to="/"
      className={clsx(styles.navLogo, "navLogo", extraClass, disabled && "disabled")}
      title="Home"
    >
      <img src={LogoImage} alt="Traverse Logo"/>
    </Link>
  )
}

export default Logo;