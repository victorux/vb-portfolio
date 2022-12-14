import Image from 'next/image'
import React from 'react'
import styles from '../../styles/imgSect.module.scss'
import img1 from '../../public/imgs/me.webp'
import { motion } from 'framer-motion'


function ImgSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div initial={{ y: 120, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.3, delay: 0.8}}><Image src={img1} layout="responsive" objectFit='cover' alt="Image"  objectPosition="center" priority /></motion.div>
      </div>
    </section>
  )
}

export default ImgSection