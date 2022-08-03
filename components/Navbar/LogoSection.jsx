import React from 'react'
import Image from "next/image";
import styles from '../../styles/header.module.scss'
import logoUrl from "../../public/logo.jpg"
import Link from 'next/link';

function LogoSection({height, width}) {
  return (
    <div>
      <Link href="/">
        {/* eslint-disable-next-line react/no-string-refs */}
        <a className={styles.linkContainer} ref="ddBtn">
        <div  className={[styles.logoContainer].join(' ')}>
          <Image
            src={logoUrl} 
            className={`${styles.borderLogo}`}
            height={height}
            width={width}
            alt={"Logo"}
            priority
          />
        </div>
          <span className={styles.logoTitle}>Victor Botan</span>
        </a>
      </Link>
    </div>
  )
}

export default LogoSection