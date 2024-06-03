import React, { useEffect } from "react";
import styles from "../../styles/about.module.scss";
import RecentUsedApps from "./RecentUsedApps";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutMe() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation
        .start({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
        })
        .then();
    }
  });

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 120 }}
      animate={animation}
    >
      <h2>About Me</h2>
      <div ref={ref} className={styles.container}>
        <div className={styles.leftSection}>
          <p className={styles.description}>
            I&apos;m a fresh graduate with a degree in Digital Media Design from
            the University of Limerick. I previously worked at Fuselab Creative
            as a UI Designer. For the past 2 years, I&apos;ve focused on
            frontend development, which I&apos;ve found highly rewarding.
            I&apos;m dedicated to creating intuitive and engaging user
            experiences. In my free time, I enjoy exploring the latest design
            trends, tech, and traveling.
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
  );
}

export default AboutMe;
