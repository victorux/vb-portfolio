import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../../styles/contacts.module.scss'
import Chat from './Chat/index'
import LetsConnect from './LetsConnect/index'

function ContactMe() {

  const {ref, inView} = useInView({
    threshold: 0.25
  });

  const animation = useAnimation();


  useEffect(()=> {
    if(inView){
      animation.start({
        opacity: 1, 
        y: 0,
        transition: {
          type: 'spring', duration: 1, delay: 0.2
        }
      });

    }
  }, [inView])

  return (
    <motion.div id="contacts" ref={ref} className={styles.wrapper}
      initial={{ opacity: 0, y: 70}}
      animate={animation}
    >
      <h2 className={styles.sectionTitle}>It's your turn!</h2>
      <div className={styles.blocks}>
        <Chat/>
        <LetsConnect/>
      </div>
    </motion.div>
  )
}

export default ContactMe