import React from 'react';
import Image from 'next/image'
import styles from '../../styles/project.module.scss'

function TechIcons(props){
    const icons_data = {
        'sketch': {
            src: '/technologies_icons/sketch.svg',
            title: 'Sketch'
        },
        'html': {
            src: '/technologies_icons/html.svg',
            title: 'Html'
        },
        'css': {
            src: '/technologies_icons/css.svg',
            title: 'Css'
        },
        'js': {
            src: '/technologies_icons/js.svg',
            title: 'JavaScript'
        },
        'react': {
            src: '/technologies_icons/react.svg',
            title: 'React'
        },
        'redux': {
            src: '/technologies_icons/redux.svg',
            title: 'Redux'
        },
        'mongodb': {
            src: '/technologies_icons/mongodb.svg',
            title: 'MongoDB'
        },
        'sass': {
            src: '/technologies_icons/sass.svg',
            title: 'Scss/Sass'
        },
        'styled': {
            src: '/technologies_icons/styled.svg',
            title: 'Styled'
        },
        'socket': {
            src: '/technologies_icons/socket.svg',
            title: 'Socket.io'
        },
        'express': {
            src: '/technologies_icons/express.svg',
            title: 'Express'
        },
        'stripe': {
            src: '/technologies_icons/stripe.svg',
            title: 'Stripe'
        }
    }
    const icons_name = props.icons;
    return (
        <div className={styles.techWrap}>
            {
                icons_name.map((icon) => (
                    <div key={icons_data[icon]['title']}>
                        <div className={styles.iconWrap}>
                            <Image src={`${icons_data[icon]['src']}`} alt={`${icon}`} layout="fill" />
                        </div>
                        <span className={styles.iconTitle}>{`${icons_data[icon]['title']}`}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default TechIcons;