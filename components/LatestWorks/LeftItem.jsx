import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../../styles/latestWorks.module.scss'
import Link from 'next/link'
import Image from 'next/image'

function LeftItem(props) {

  const {ref, inView} = useInView({
    threshold: 0.25
  });

  const animation = useAnimation();


  useEffect(()=> {
    if(inView){
      animation.start({
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
          duration: 0.3,
          delay: 0.3,
        }
      });

    }
  });


  return (
    <motion.div ref={ref} className={styles.project__item_left}
            initial={{ opacity: 0, y: 80, scale: 0.9}}
            animate={animation}
          >
            <Link href={props.link}>
              <a>
                <div className={styles.imgg}>
                  <Image src={props.imgSrc} layout="responsive" />
                </div>
                <div className={styles.project__desc}>
                  <div className={styles.project__title}>{props.title}</div>
                  <div className={styles.project__category}>{props.tags}</div>
                </div>
                </a>
            </Link>
          </motion.div>
  )
}

export default LeftItem