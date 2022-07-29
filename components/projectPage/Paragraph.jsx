import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../../styles/project.module.scss'
function Paragraph(props){
    const row = props.row;

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
    }, [inView])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 70}}
            animate={animation}
            className={
                row ? [styles.row, styles.paragraph].join(' ') : styles.paragraph
            }
        >
            {props.children}
        </motion.div>
    )
}

export default Paragraph;