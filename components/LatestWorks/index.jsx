import React from 'react'
import styles from '../../styles/latestWorks.module.scss'
import Link from 'next/link'

// Import Project Preview Images
import cpImg from '../../public/projects/coffetino/preview.jpg'
import adsImg from '../../public/projects/ads/preview.webp'
import aceImg from '../../public/projects/ace/preview.webp'
import finetekImg from '../../public/projects/finetek/preview.webp'
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
          <LeftItem link="/projects/coffetino" imgSrc={cpImg} title="Coffetino" tags="UI/UX, Frontend, Backend, E-commerce" />
          <LeftItem link="/projects/acecoinpay" imgSrc={aceImg} title="AceCoinPay" tags="UI Design, Frontend" />
        </div>


        {/* Right {Small blocks} */}
        <div className={styles.masonry__right}
        >
          
          {/* Project Item */}
          <RightItem link="/projects/artdecosolution" imgSrc={adsImg} title="Artdeco Solution" tags="Web Design, Logo, Frontend" />
          <RightItem link="/projects/finetek" imgSrc={finetekImg} title="FineTek" tags="Frontend" />
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