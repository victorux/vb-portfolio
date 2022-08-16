import React, {useEffect} from 'react'
import styles from '../../styles/project.module.scss'
import Image from "next/image";

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


function Img(props){

    // Animation setup

    const {ref, inView} = useInView({
        threshold: 0.25
    });

    const animation = useAnimation();


    useEffect(()=> {
        if(inView){
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 1, delay: 0.1
                }
            });

        }
    }, [inView, animation])

    return (
        <motion.div className={styles.imgWrapper}
                    ref={ref}
                    initial={{ opacity: 0, y: 70}}
                    animate={animation}
        >
            <Image className={styles.coverImg} src={props.srcImg} layout="fill" style={{zIndex: 0}} alt="" />
        </motion.div>
    )
}

export default Img;