import React from 'react';
import clsx from "clsx";
import Logo from "./Logo";
import Button from "./Button";
import styles from '../../styles/Header.module.scss';
import {NavLink} from "react-router-dom";

const navItemsUnlaunched =[
  {title: "About Traverse", url: "/about"},
  {title: "General FAQ", url: "/faq"},
  {title: "Get in Touch", url: "/contact"}
]

function Header({extraClass}) {
  return (
    <header className={clsx(styles.header, "header", extraClass && extraClass)}>
      <nav className="navbar">
        <Logo/>

        <ul className="navbarNav">
          {navItemsUnlaunched.map((item, idx) => (
            <li className="navItem" key={idx}>
              <NavLink
                to={item.url}
                title={item.title}
                tabIndex={idx}
                className={({isActive}) => clsx("navLink", isActive && "active")}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <Button text="Launch the app" variantSize="sm"/>

      </nav>

    </header>
  )
}

export default Header;