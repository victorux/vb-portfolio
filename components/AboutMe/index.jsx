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
            I&apos;m in my final year studying Digital Media Design at the
            University of Limerick. I&apos;ve spent 5+ years doing UX/UI design
            and web development, previously at Fuselab Creative as a UI
            Designer. For the past 2 years, Ive been getting into frontend
            development, which I&apos;ve really enjoyed. I love making things
            that people enjoy using. And in my free time, I like checking out
            the latest design trends, tech, and going on trips.
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
