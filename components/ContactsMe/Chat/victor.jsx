import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/contacts.module.scss'
import VictorImg from '../../../public/victor.webp'


function victor() {
  return (
    <div className={styles.victor}>
      <div className={styles.imageWrapper}>
        <div>
         <Image src={VictorImg} alt="victor" />
        </div>
      </div>
      <span className={styles.victorAvatar}>Victor</span>
    </div>
  )
}

export default victor