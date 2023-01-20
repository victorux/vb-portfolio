import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote';
import styles from '../../styles/project.module.scss'

import Head from 'next/head';
import Navbar from '../../components/Navbar';

import Cover from '../../components/projectPage/Cover';
import AboutProject from '../../components/projectPage/AboutProject';
import ContentWrap from '../../components/projectPage/ContentWrap';
import Heading from '../../components/projectPage/Heading'
import Paragraph from "../../components/projectPage/Paragraph";
import Splitter from "../../components/projectPage/Splitter";
import Img from "../../components/projectPage/Img"
import TechIcons from "../../components/projectPage/TechIcons";
import ContactsMe from "../../components/ContactsMe";
import NextProject from '../../components/projectPage/NextProject';


export default function ProjectPage({frontmatter: {title, date, image}, mdxSource}){
  var components = {Cover, AboutProject, ContentWrap, Heading, Paragraph, Splitter, Img, TechIcons, NextProject}

  return (
  <>
    <Head>
      <title>Project: {title}</title>
      <meta name="description" content="" />
      <link rel="icon`" href="/favicon.ico" />
    </Head>
    <Navbar />
    <div className={styles.wrapper}>
      <MDXRemote {...mdxSource} components={components} image={image}>
      </MDXRemote>
    </div>
    <ContactsMe />
  </>)
}


export async function getStaticProps({ params: {slug} }){
  const markdownWithMeta = fs.readFileSync(path.join('projects', slug + '.mdx'), 'utf-8');

  const {data: frontmatter, content} = matter(markdownWithMeta)

  const mdxSource = await serialize(content)
  
  return {
    props: {
      frontmatter,
      slug,
      mdxSource,
    }
  }
}



export async function getStaticPaths(){
  const files = fs.readdirSync(path.join('projects'))

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))
  return {
    paths,
    fallback: false
  }
}


