import React from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const footerLinks = [
  { name: "Privacy", url: "" },
  { name: "Terms", url: "" },
];

function FooterLinks({ extraClass }) {
  return (
    <ul
      className={clsx(
        "footerLinksList",
        "listUnstyled",
        extraClass && extraClass
      )}
    >
      {footerLinks.map((link, idx) => (
        <li key={idx}>
          <NavLink
            to={link.url}
            title={link.name}
            className={clsx(
              "footerLinksListLink",
              link.url === "" || link.url === undefined ? "disabled" : ""
            )}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;
