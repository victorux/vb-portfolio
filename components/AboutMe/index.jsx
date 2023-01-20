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
        I&apos;m a Front-End Developer with a mix of UI design and development skills. I&apos;ve been working in the field for 5+ years, with the last 3 focused on front-end web development. I&apos;m currently studying Computer Science at the University of Limerick and focusing on using React. I&apos;m always learning new things and looking for ways to create great user experiences.
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