import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import styles from '../../styles/project.module.scss'

function Heading(props) {

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
        <motion.div ref={ref}
                    initial={{ opacity: 0, y: 70}}
                    animate={animation}
        >
            <h2 className={styles.heading}
                style={props.center ? {textAlign: 'center'}: {textAlign: 'left'}}
            >
                {props.text}
            </h2>
        </motion.div>
    );
}

export default Heading;