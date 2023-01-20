import Link from 'next/link'
import React from 'react'
import styles from '../../styles/project.module.scss'

function NextProject({link, projectTitle}) {
  return (
    <>
    <div className={styles.nextProjectContainer}>
        <h1>Thanks for watching!🎉👏 </h1>
        <Link href={link} passHref>
            <div className={styles.rightBox}>
                <span>Next Project</span>
                <h3>{projectTitle} »</h3>
            </div>
        </Link>
    </div>
    </>
  )
}

export default NextProject