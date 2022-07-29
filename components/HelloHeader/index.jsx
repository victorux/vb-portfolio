import React from 'react'
import styles from '../../styles/helloHeader.module.scss'
import { motion } from "framer-motion";
import { Link } from 'react-scroll'

const variants = {
  start: { opacity: 1, y: 0 },
  end: { y: 20, opacity: 0},
}


function HelloHeader() {
  return (
    <motion.section className={styles.headerContainer}
      initial={{opacity: 0, y: 30}}
      animate={{opacity: 1, y: 0}}
      transition={{type: 'spring', duration: 1, delay: 0.3}}
    >
      <h1 className={styles.title}>Hi, I am Frontend Developer!</h1>
      <p className={styles.description}>I like to design and code beautifuly simple things.</p>
      <div className={styles.scrollBtn}>        
        <svg width="27" height="42" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <rect stroke="#1F2025" strokeWidth="2" x="1" y="1" width="25" height="40" rx="12.5"/>
            <motion.circle fill="#000" cx="13.5" cy="9.5" r="3.5"
              variants={variants}
              initial="start"
              animate="end"
              transition={{ duration: 2, repeat: Infinity}}
            />
          </g>
        </svg>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={700}>See My Works</Link>
      </div>
    </motion.section>
  )
}

export default HelloHeader