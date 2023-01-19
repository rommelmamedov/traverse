import React from 'react';
import clsx from "clsx";
import styles from '../../styles/Footer.module.scss';

function Footer() {
  return (
    <footer className={clsx(styles.footer, "footer")}>
      <div className="footerLeftWrapper">
        <span>©2022 Traverse Labs Inc.</span>

        <ul className="staticPagesList listUnstyled">
          <li>Privacy</li>
          <li>Terms</li>
        </ul>
      </div>

      <div className="footerRightWrapper">

      </div>

    </footer>
  )
}

export default Footer;