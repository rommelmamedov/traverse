import clsx from "clsx";
import { NavLink } from "react-router-dom";

function NavItems({ extraClass, navItemList }) {
  return (
    <ul className={clsx("navbarNav", extraClass && extraClass)}>
      {navItemList &&
        navItemList?.map((item, idx) => (
          <li className="navItem" key={idx}>
            {item.isExternalLink ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                title={item.title}
                className="navLink"
              >
                {item.title}
              </a>
            ) : (
              <NavLink
                to={item.url}
                title={item.title}
                tabIndex={idx}
                className={({ isActive }) =>
                  clsx("navLink", isActive && "active")
                }
              >
                {item.title}
              </NavLink>
            )}
          </li>
        ))}
    </ul>
  );
}

export default NavItems;
