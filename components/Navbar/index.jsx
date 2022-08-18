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
        initial={{ translateY:-100, opacity: 0}}
        animate={{ translateY: 0, opacity: 1}}
        transition={{duration: 0.3}}
      >
        <LogoSection width={62} height={62} />
        { !isMobile && <NavSection/> }
        { isMobile && <NavSectionMobile/> }
      </motion.header>
    </div>
  );
}

export default Navbar;
