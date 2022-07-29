import React, {useState, useEffect} from "react";
import LogoSection from "./LogoSection";
import NavSection from './NavSection'
import NavSectionMobile from "./NavSectionMobile";
import styles from "../../styles/header.module.scss";
import { useMediaQuery } from "react-responsive";
import { DeviceSizes } from '../responsive/index'
import { motion } from "framer-motion";



function Navbar(props) {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])

  const isMobile = useMediaQuery({ maxWidth: DeviceSizes.mobile });

  return mounted && (
    <div className={styles.wrapper} style={{zIndex: 999}}>
      <motion.header className={styles.header}
        initial={{ y: -100, opacity: 0}}
        animate={{ y: 0, opacity: 1}}
        transition={{type: 'spring', duration: 0.6}}
      >
        <LogoSection />
        { !isMobile && <NavSection/> }
        { isMobile && <NavSectionMobile/> }
      </motion.header>
    </div>
  );
}

export default Navbar;
