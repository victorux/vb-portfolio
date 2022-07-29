import React from 'react'
import styles from '../../../styles/contacts.module.scss'


function Btn(props) {
  const {bg} = props;
  const formik = props.formik;
  return (
    <button
      onClick={props.click} 
      className={[styles.button, bg === 'black' ? styles.black : bg === 'green' ? styles.green : bg === 'gray' ? styles.gray : null].join(' ')}>
        
        {props.title}

    </button>
  )
}

export default Btn