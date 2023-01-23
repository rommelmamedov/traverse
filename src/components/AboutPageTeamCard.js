import React  from 'react';
import clsx from "clsx";
import {Link} from "react-router-dom";
import LogoLight from "../../assets/logos/traverse-logo.png";
import LogoDark from "../../assets/logos/traverse-logo-dark.png"
import styles from '../../styles/Logo.module.scss';
import {useIsMobileBreakpoint} from "../../hooks/useIsMobileBreakpoint";

function AboutPageTeamCard({image, name, title, link, linkUrl}) {
  const isMobileBreakpoint = useIsMobileBreakpoint();
  return (
    <article className="teamCard">
      <div className="teamCardImageWrapper">
        <img src={image} alt={name}/>
      </div>

      <h3>{name}</h3>

      <div className="teamCardFooter">
        {title && title}<br/>
        {link &&
        <span>
          Email: <a href={linkUrl} rel="noopener" target="_blank" title={link}>{link}</a>
        </span>
        }
      </div>
      
    </article>
  )
}

export default AboutPageTeamCard;