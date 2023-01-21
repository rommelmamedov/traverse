import React,{useRef, useState, useCallback, useEffect} from 'react';
import clsx from "clsx";
import {useOnClickOutside} from "usehooks-ts";
import {useIsMobileBreakpoint} from "../../hooks/useIsMobileBreakpoint";
import Button from "./Button";
import styles from '../../styles/MobileMenu.module.scss';

function MobileMenu({extraClass, children}) {
  const isMobileBreakpoint = useIsMobileBreakpoint();
  const mobileMenuRef = useRef(null);

  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleToggleMobileMenu = useCallback(() => {
    setOpenMobileMenu(openMobileMenu => !openMobileMenu);
  }, []);
  const handleCloseMobileMenu = useCallback(() => setOpenMobileMenu(false), []);

  useEffect(() => {
    if (isMobileBreakpoint) {
      document.body.classList.toggle('menuIsOpen', openMobileMenu);
      document.querySelector("a.navLogo").classList.toggle('menuIsOpen', openMobileMenu);
    } else {
      document.body.classList.remove('menuIsOpen');
      document.querySelector("a.navLogo").classList.remove('menuIsOpen');
      setOpenMobileMenu(false);
    }
  }, [openMobileMenu, setOpenMobileMenu, isMobileBreakpoint]);

  useOnClickOutside(mobileMenuRef, handleCloseMobileMenu);

  return (
    <section
      className={clsx(styles.mobileMenuWrapper, "mobileMenuWrapper", extraClass && extraClass)}
      ref={mobileMenuRef}
    >

      <Button
        extraClass={clsx("mobileMenuButton", openMobileMenu && "isOpen")}
        title="Menu"
        onClick={handleToggleMobileMenu}
      >
        <span className="mobileMenuIcon">
          <span className="menuIcon"/>
        </span>

      </Button>

      <aside className={clsx("mobileMenu", openMobileMenu && "isOpen")}>
        <div className="mobileMenuInner">
          {children}
        </div>
      </aside>

    </section>
  )
}

export default MobileMenu;