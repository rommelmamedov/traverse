import React from "react";
import clsx from "clsx";

const footerSocialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/traverselabs",
    icon: (
      <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:contact@traverselabs.xyz",
    icon: (
      <svg width={24} height={24} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z" />
      </svg>
    ),
  },
];

function FooterSocialLinks({ extraClass }) {
  return (
    <ul
      className={clsx(
        "footerSocialLinksList",
        "listUnstyled",
        extraClass && extraClass
      )}
    >
      {footerSocialLinks.map((link, idx) => (
        <li key={idx}>
          <a href={link.url} target="_blank" rel="noreferrer" title={link.name}>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FooterSocialLinks;
