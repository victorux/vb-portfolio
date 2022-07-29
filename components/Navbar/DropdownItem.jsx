import React from 'react'
import PropTypes from 'prop-types';
import styles from '../../styles/header.module.scss'
import useCopy from "use-copy";
import { Check } from 'react-feather';
import Link from 'next/link';

function DropdownItem(props) {
  const LeftIcon = props.icon;

  // copy to clipboard

  const [copied, copy, setCopied] = useCopy("hi.victorb@gmail.com")
  
  const copyText = () => {
    copy();
 
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    
      props.copy 
      ? (
      <li className={copied ? [styles.dropdownItem, styles.cursorDefault].join(' ') : styles.dropdownItem}>
        <span>
          {
            copied ?
            (<Check size={22} color={copied ? '#2A9F39' : '#586bf7'}/>)
            :
            (<LeftIcon size={22} color={copied ? '#0A0A18' : '#586bf7'}/>)
          }
        </span>
        <span className={copied ? styles.dropdownItemTextCopied : styles.dropdownItemText}>{copied ? "Copied to clipboard!" : <a onClick={copyText} className={styles.dropdownItemText}>{props.children}</a>}</span>
      </li>) 
      : (<li className={styles.dropdownItem}><span><LeftIcon size={22} color='#586bf7' /></span><Link href='mailto:hi.victorb@gmail.com'><a className={styles.dropdownItemText}>{props.children}</a></Link></li>)
    
  )
}

DropdownItem.propTypes = {
  LeftIcon: PropTypes.element
};

export default DropdownItem