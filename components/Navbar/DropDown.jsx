import React, { useState } from 'react'
import Link from 'next/link'
import styles from "../../styles/header.module.scss"
import DropdownItem from './DropdownItem.jsx'
import { ChevronDown, Mail, Copy } from 'react-feather'

function DropDown() {

  const [dropDown, setDropDown] = useState(false)

  const showDropDown = () => setDropDown(true)

  const hideDropDown = () => setDropDown(false)

  return (
    <div>
      <div className={styles.dropDownContainer}>
        <Link href="/">
          <a className={[styles.btn, dropDown ? styles.dropDownButtonActive : null].join(' ')} onMouseEnter={showDropDown} onMouseLeave={hideDropDown} onClick={(e) => e.preventDefault()}><span className={dropDown ? styles.mailOpacity : null}>hi.victorb@gmail.com</span><ChevronDown className={dropDown ? styles.mailOpacity : null} /></a>
        </Link>
       <ul className={[styles.dropDownMenu, (dropDown ? styles.show : null)].join(' ')} onMouseEnter={showDropDown} onMouseLeave={hideDropDown}>
          <DropdownItem icon={Copy} copy={true}>Copy</DropdownItem>
          <DropdownItem icon={Mail} copy={false}>Open in your mail app</DropdownItem>
        </ul>
      </div>
      
    </div>
  )
}

export default DropDown