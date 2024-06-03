import React, { useState, useEffect } from "react";
import styles from "../../styles/header.module.scss";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { MenuToggle } from "./MenuToggle";
// import {ScrollLocky} from 'react-scroll-locky';

function NavSectionMobile(props) {
  const [isOpen, setOpen] = useState(false);

  const [showSideDrawer, setshowSideDrawer] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
    isOpen ? sideDrawerClosedHandler() : showSidebar();
  };

  //  FUNCTION TO HANDLE CLOSE ACTION ON SIDEDRAWER/MODAL
  const sideDrawerClosedHandler = () => {
    setshowSideDrawer(false);

    // Unsets Background Scrolling to use when SideDrawer/Modal is closed
    document.body.style.overflow = "unset";
  };

  // FUNCTION TO HANDLE OPEN ACTION ON SIDEDRAWER/MODAL
  const showSidebar = () => {
    setshowSideDrawer(true);

    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  useEffect(() => {
    document.body.style.overflow = "unset";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className={styles.navigation}>
      <MenuToggle isOpen={isOpen} toggle={toggleMenu} />
      <div
        className={[
          styles.mobileMenuContainer,
          isOpen ? styles.showMenuContainer : null,
        ].join(" ")}
      >
        <ul className={styles.mobileNavLinks}>
          <ScrollLink
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            <a onClick={toggleMenu} className={styles.mobNavLink}>
              Work
            </a>
          </ScrollLink>
          <ScrollLink
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
          >
            <a onClick={toggleMenu} className={styles.mobNavLink}>
              Contacts
            </a>
          </ScrollLink>
          <Link href="mailto:hi.victorb@gmail.com">
            <a className={styles.mobNavLink} onClick={toggleMenu}>
              hi.victorb@gmail.com
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavSectionMobile;
