import React  from 'react';
import clsx from "clsx";
import {BsMedium} from "react-icons/bs";
import {FaDiscord, FaTelegramPlane, FaTwitter} from "react-icons/fa";

const footerSocialLinks = [
  {name: "Medium", url: "", icon:<BsMedium/>},
  {name: "Telegram", url: "", icon: <FaTelegramPlane/>},
  {name: "Discord", url: "", icon: <FaDiscord/>},
  {name: "Twitter", url: "", icon: <FaTwitter/>}
]

function FooterSocialLinks({extraClass}) {

  return (
    <ul className={clsx("footerSocialLinksList", "listUnstyled", extraClass && extraClass)}>
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
  )
}

export default FooterSocialLinks;
