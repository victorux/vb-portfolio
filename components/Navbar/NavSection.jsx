import React from "react";
import styles from "../../styles/header.module.scss";
import { Link } from "react-scroll";
import DropDown from "./DropDown";

function NavSection() {
  return (
    <nav className={styles.navigation}>
      <Link
        activeClass="active"
        to="works"
        spy={true}
        smooth={true}
        offset={-100}
        duration={700}
      >
        <span className={styles.nLinks}>Work</span>
      </Link>
      <Link
        activeClass="active"
        to="contacts"
        spy={true}
        smooth={true}
        offset={-70}
        duration={700}
      >
        <span className={styles.nLinks}>Contacts</span>
      </Link>
      <DropDown />
    </nav>
  );
}

export default NavSection;
