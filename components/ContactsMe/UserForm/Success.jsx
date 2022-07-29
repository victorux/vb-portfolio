import React, { Component } from 'react'
import Bot from '../Chat/Bot.jsx'
import Btn from '../Chat/Btn.jsx'
import Victor from '../Chat/victor.jsx'
import styles from '../../../styles/contacts.module.scss'




const Success = (props) => {
  const formik = props.formik;


  const reset = () => {
    formik.resetForm();
  }


  return (
    <div className={styles.animateChat}>
        <Victor />
        <Bot title='Thank you!!! 🎉🎉🎉' message="Will get to you back soon!"/>
        <div className={styles.navigation}>
          <Btn title="Got It!" click={reset} bg='black' text='white'  />
        </div>
    </div>
  )
}

export default Success