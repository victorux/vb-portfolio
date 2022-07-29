import React from 'react'
import styles from '../../../styles/contacts.module.scss'

function Bot(props) {
  return (
    <div className={styles.botConversation}>
      <span className={styles.botHeader}>{props.title}</span>
      <p className={styles.botText}>{props.message}</p>
    </div>
  )
}

export default Bot