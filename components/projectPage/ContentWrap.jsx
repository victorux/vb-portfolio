import React from 'react'
import styles from '../../styles/project.module.scss'

function ContentWrap(props) {
  return (
    <div className={styles.contentWrap}>{props.children}</div>
  )
}

export default ContentWrap