import React from 'react'
import styles from '../../styles/latestWorks.module.scss'
import Link from 'next/link'

// Import Project Preview Images
import cpImg from '../../public/projects/coffetino/preview.jpg'
import realestateImg from '../../public/projects/realestate/preview.webp'
import chatboxImg from '../../public/projects/chatbox/preview.webp'
import artdecoImg from '../../public/projects/artdeco/preview.webp'
import LeftItem from './LeftItem'
import RightItem from './RightItem'



function LatestWorks() {

  return (
    <div className={styles.wrapper}>
      <h2 id="works">My Latest Works</h2>
      <p>Some Things I have built</p>
      <div className={styles.masonry}>

        {/* Left {Big blocks} */}
        <div className={styles.masonry__left}>
          <LeftItem link="/projects/chatbox" imgSrc={chatboxImg} title="Chatbox App" tags="UX/UI, Frontend, Backend, Socket.io" />
          <LeftItem link="/projects/coffetino" imgSrc={cpImg} title="Coffetino" tags="UX/UI, Frontend, Backend, E-commerce" />
        </div>


        {/* Right {Small blocks} */}
        <div className={styles.masonry__right}
        >
          
          {/* Project Item */}
          <RightItem link="/projects/realestate" imgSrc={realestateImg} title="Real Estate" tags="High fidelity wireframe, prototype" />
          <RightItem link="/projects/artdeco" imgSrc={artdecoImg} title="Artdeco Solution" tags="Logo Design, Landing Page Design, Developing" />
          <div>
            <Link href="/">
              <a className={styles.project__seemore}>See more works</a>
            </Link>

          </div>
          {/* end proj */}

        </div>
        {/* end masonry */}
      </div>
    </div>
  )
}

export default LatestWorks