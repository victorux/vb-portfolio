import React from 'react'
import Image from 'next/image'
import styles from '../../styles/project.module.scss'
import Link from 'next/link'
import { motion } from "framer-motion";

const variants = {
    start: { opacity: 1, y: 0 },
    end: { y: 20, opacity: 0},
}

function Cover(props) {
  return (
    <motion.div
        className={styles.imgWrapper}
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.3, delay: 0.6}}
    >
      <Image className={styles.coverImg} src={props.srcImg} layout="fill" style={{zIndex: 0}} priority alt=""  />
      <Link href='/#works'>
        <a className={styles.back}>
          <span className={styles.backArrow}>←</span>
          <span>Back</span>
        </a>
      </Link>
    </motion.div>
  )
}

export default Cover