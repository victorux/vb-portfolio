import React, {useState, useEffect} from "react";
import Link from 'next/link'
import styles from '../../../styles/contacts.module.scss'
import DropDown from '../../Navbar/DropDown'
import {Linkedin, Instagram, GitHub, Dribbble, Mail} from 'react-feather'

import { useMediaQuery } from "react-responsive";
import { DeviceSizes } from '../../responsive/index';


function index() {

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
      setMounted(true)
  }, [])

  const isMobile = useMediaQuery({ maxWidth: DeviceSizes.mobile });

  return mounted && (
    <div className={styles.social}>
      <div className={styles.socialContainer}>
        <h3 className={styles.secondTitlte}>Let’s Connect</h3>
        { !isMobile && <DropDown/> }
        { isMobile && <Link href='mailto:hi.victorb@gmail.com'><a className={styles.mailLink}><Mail /><span>hi.victorb@gmail.com</span></a></Link> }
        <div className={styles.iconsContainer}>
          <Link href="https://www.linkedin.com/in/victorbotan/"><a target="_blank" title='Linkedin'><Linkedin color='#23273B'/></a></Link>
          <Link href="https://github.com/victorux"><a target="_blank" title='GitHub'><GitHub color='#23273B' /></a></Link>
          <Link href="https://dribbble.com/survex"><a target="_blank" title='Dribbble'><Dribbble color='#23273B' /></a></Link>
        </div>
      </div>
      <div className={styles.copyright}>© 2022. <br />Site made with Nexjs, Netlify. <br/>Designed and built by <span>Victor Botan</span> </div>
    </div>
  )
}

export default index