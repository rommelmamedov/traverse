import React from 'react';
import clsx from "clsx";
import {NavLink} from "react-router-dom";

function NavItems({extraClass, navItemList}) {
  return (

    <ul className={clsx( "navbarNav", extraClass && extraClass)}>
      {navItemList && navItemList?.map((item, idx) => (
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
  )
}

export default NavItems;
