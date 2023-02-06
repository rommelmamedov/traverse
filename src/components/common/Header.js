import clsx from "clsx";
import { useIsMobileBreakpoint } from "../../hooks/useIsMobileBreakpoint";
import Logo from "./Logo";
//import Button from "./Button";
import MobileMenu from "./MobileMenu";
import NavItems from "./NavItems";
import styles from "../../styles/Header.module.scss";

const navItemsUnlaunched = [
  { title: "Intro", url: "/", isExternalLink: false },
  { title: "About", url: "/about", isExternalLink: false },
  { title: "Get In Touch", url: "/contact", isExternalLink: false },
];

function Header({ extraClass }) {
  const isMobileBreakpoint = useIsMobileBreakpoint();

  return (
    <header className={clsx(styles.header, "header", extraClass && extraClass)}>
      <nav className="navbar">
        <Logo />

        {isMobileBreakpoint ? (
          <MobileMenu>
            <NavItems
              extraClass="navItems mobile"
              navItemList={navItemsUnlaunched}
            />

            <div className="mobileMenuFooter">
              {/* <Button
                extraClass="navButton mobile"
                text="Launch the app"
                variantSize="sm"
              /> */}
            </div>
          </MobileMenu>
        ) : (
          <>
            <NavItems extraClass="desktop" navItemList={navItemsUnlaunched} />

            {/* <Button
              extraClass="navButton"
              text="Launch the app"
              variantSize="sm"
            /> */}
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
