import React, { useEffect } from 'react'
import styles from '../../styles/about.module.scss'
import RecentUsedApps from './RecentUsedApps'
import { motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'


function AboutMe() {

  const {ref, inView} = useInView({
    threshold: 0.2
  });

  const animation = useAnimation();


  useEffect(() => {
        if (inView) {
          animation.start({
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2
            }
          }).then();
        }
      });

  return (
    <motion.div className={styles.wrapper}
      initial={{ opacity: 0, y: 120}}
      animate={animation}
    >
    <h2>About Me</h2>
    <div ref={ref} className={styles.container}>
      <div className={styles.leftSection}>
        <p className={styles.description}>
        {/*  asaa*/}
        {/*  asaa*/}
        {/*  asaa*/}
        {/*  asaa*/}
        {/*  asaa*/}
        {/*  asaa*/}
        Hello! My name is Victor and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
        </p>
      </div>
      <div className={styles.rightSection}>
        <p>Few technologies Ive been working with recently:</p>
        <div>
          <RecentUsedApps />
        </div>
      </div>
    </div>
    <br />
    </motion.div>
  )
}

export default AboutMe