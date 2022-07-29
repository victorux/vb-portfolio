import React from 'react'
import { ChevronDown } from 'react-feather'
import styles from '../../styles/about.module.scss'

const rotate = styles.rotate;
const chevron = styles.chevron;

function Btn(props) {
  return (
    <div className={styles.containerBtn} onClick={props.setStateOfParent}>
      <div className={styles.btn}><span>{props.children}</span><ChevronDown color='#586bf7' className={props.isOpen ? rotate : chevron} /></div>
    </div>
  )
}

export default Btn