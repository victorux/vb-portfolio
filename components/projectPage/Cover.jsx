import React from 'react'
import Image from 'next/image'
import styles from '../../styles/project.module.scss'
import Link from 'next/link'

function Cover(props) {
  return (
    <div className={styles.imgWrapper}>
      <Image className={styles.coverImg} src={props.srcImg} layout="fill" style={{zIndex: 0}} priority alt=""  />
      <Link href='/'>
        <a className={styles.back}>
          <span className={styles.backArrow}>←</span>
          <span>Back</span>
        </a>
      </Link>
    </div>
  )
}

export default Cover