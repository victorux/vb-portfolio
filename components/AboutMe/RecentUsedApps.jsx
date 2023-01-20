import React, { useState } from 'react'
import styles from '../../styles/about.module.scss'
import Btn from './Btn';
import JsIcon from '../../public/icons/js.svg'
import ReactIcon from '../../public/icons/react.svg'
import NextIcon from '../../public/icons/nextjs.svg'
import TailwindcssIcon from '../../public/icons/tcss.svg'
import PsIcon from '../../public/icons/ps.svg'
import SketchIcon from '../../public/icons/sketch.svg'
import MongoIcon from '../../public/icons/mongodb.svg'
import FigmaIcon from '../../public/icons/figma.svg'
import NodeIcon from '../../public/icons/node.svg'
import ReduxIcon from '../../public/icons/redux.svg'
import RestApiIcon from '../../public/icons/restapi.svg'
import ExpressIcon from '../../public/icons/express.svg'


function Tech() {

  const [showList, setShowlist] = useState(false);
  const setParentState = () => setShowlist(!showList);


  return (
    <div>
      <ul className={styles.appsContainer}>
        <li><JsIcon width="40" /><span>Javascript</span></li>
        <li><ReactIcon width="40" /><span>React</span></li>
        <li><NextIcon width="40" /><span>Next.js</span></li>
        <li><MongoIcon width="40" /><span>MongoDB</span></li>
        { 
          showList ?
          <React.Fragment>
            <li><NodeIcon width="40" height="40" /><span>Node.js</span></li>
            <li><TailwindcssIcon width="40" /><span>TailwindCSS</span></li>
            <li><ReduxIcon width="40" /><span>Redux</span></li>
            <li><ExpressIcon width="40" height="40" /><span>Express</span></li>
            <li><SketchIcon width="40" /><span>Sketch</span></li>
            <li><PsIcon width="40" /><span>Photoshop</span></li>
            <li><FigmaIcon width="40" /><span>Figma</span></li>
            <li><RestApiIcon width="40" /><span>RestAPI</span></li>
          </React.Fragment>
          : null
        }
      </ul>
        <Btn setStateOfParent = {setParentState} isOpen={showList}>{showList ? 'Show Less' : 'Show More'}</Btn>
    </div>
  )
}

export default Tech