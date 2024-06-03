import React from "react";
import styles from "../../styles/latestWorks.module.scss";
import Link from "next/link";

// Import Project Preview Images
import cpImg from "../../public/projects/coffetino/preview.jpg";
import irelandGolfBallsImg from "../../public/projects/irelandgolfballs/preview.jpg";
import chatboxImg from "../../public/projects/chatbox/preview.jpg";
import bymateImg from "../../public/projects/bymate/preview.jpg";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";

function LatestWorks() {
  return (
    <div className={styles.wrapper}>
      <h2 id="works">Work</h2>
      <div className={styles.masonry}>
        {/* Left {Big blocks} */}
        <div className={styles.masonry__left}>
          <LeftItem
            link="/projects/bymate"
            imgSrc={bymateImg}
            title="Bymate"
            tags="FYP, UX/UI, Frontend, Backend, 2024"
            new
          />
          <LeftItem
            link="/projects/coffetino"
            imgSrc={cpImg}
            title="Coffetino"
            tags="UX/UI, Frontend, Backend, 2022"
          />
        </div>

        {/* Right {Small blocks} */}
        <div className={styles.masonry__right}>
          {/* Project Item */}
          <RightItem
            link="/projects/irelandgolfballs"
            imgSrc={irelandGolfBallsImg}
            title="IrelandGolfBalls"
            tags="UX/UI, 2024"
            new
          />
          <RightItem
            link="/projects/chatbox"
            imgSrc={chatboxImg}
            title="Chatbox App"
            tags="UX/UI, Frontend, Backend, 2023"
          />
          {/* <div>
            <Link href="/">
              <a className={styles.project__seemore}>See more works</a>
            </Link> */}
          </div>
          {/* end proj */}
        </div>
        {/* end masonry */}
      </div>
    </div>
  );
}

export default LatestWorks;
