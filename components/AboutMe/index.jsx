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
        As a Front-End Developer with a strong background in both UX/UI design and web development, I bring a unique perspective to creating digital experiences. My 4 years of experience in UX/UI design and the last 3 years specifically dedicated to front-end web development have honed my skills in creating visually stunning and user-friendly interfaces. I am currently a student at the University of Limerick, studying Computer Science and focusing on front-end development using React. I am dedicated to staying current with the latest technologies and design principles, and am excited to bring my skills and experience to your company to help create innovative, user-centric products. In my free time, I enjoy traveling and going to the gym to keep myself physically and mentally fit.
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