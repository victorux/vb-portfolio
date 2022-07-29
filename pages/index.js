import Head from 'next/head'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactsMe'
import HelloHeader from '../components/HelloHeader'
import ImgSection from '../components/ImgSection'
import LatestWorks from '../components/LatestWorks'
import Navbar from '../components/Navbar/index'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import index from '../components/ContactsMe/Chat'
import Link from 'next/link'


export default function Home({ projects }) {
  return (
    <div>
      <Head>
        <title>Welcome to homepage</title>
        <meta name="description" content="This is my official portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* {
        projects.map((project, index)=> (
          <div>
            <h3>{project.frontmatter.title}</h3>
            <Link href={`/projects/${project.slug}`}><a>Link</a></Link>
          </div>
        ))
      } */}
      <HelloHeader />
      <ImgSection />
      <AboutMe />
      <LatestWorks />
      <ContactMe />
    </div>
  )
}

export async function getStaticProps(){
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('projects'));

  const projects = files.map(filename => {
    const slug = filename.replace('.mdx', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('projects', filename), 'utf-8')

    const {data: frontmatter} = matter(markdownWithMeta);
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      projects: projects,
    }
  }
}