import React, { Component } from 'react'
import styles from '../../../styles/contacts.module.scss'
import Btn from '../Chat/Btn';

const UserDetails = (props) => {
  const formik = props.formik;

  const prevStep = () => {
    formik.setFieldValue('step', 1)
  }

  const nextStep = () => {
    formik.setFieldValue('step', 3)
  }

    // Send email
    async function handleOnSubmit(e){
      e.preventDefault();
      const formData = formik.values;
      fetch('/api/mail', {
        method: 'post',
        body: JSON.stringify(formData)
      }).then(() =>  nextStep())
    }

    return (
      <div className={styles.animateChat}>
        <span className={styles.titleUserDetails}>🦹‍♀️ Tell a bit about yourself</span>
        <div className={styles.userInputs}>
          <input
            placeholder='Your full name or company name'
            id='fullName'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultValue={formik.values.fullName}
            className={formik.errors.fullName && formik.touched.fullName ? [styles.user_input, styles.inputError].join(' ') : styles.user_input}
          />
          {
            formik.errors.fullName && formik.touched.fullName 
            ? <span className={styles.error}>{formik.errors.fullName}</span> 
            : null
          }
          <input 
            placeholder='Your Email'
            id='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultValue={formik.values.email}
            className={formik.errors.email && formik.touched.email ? [styles.user_input, styles.inputError].join(' ') : styles.user_input}
          />
          {
            formik.errors.email && formik.touched.email 
            ? <span className={styles.error}>{formik.errors.email}</span> 
            : null
          }
          <input 
            placeholder='Contact Number (optional)' 
            id='phoneNumber'
            type="number"
            maxLength="14"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            defaultValue={formik.values.phoneNumber}
            className={formik.errors.phoneNumber && formik.touched.phoneNumber ? [styles.user_input, styles.noSpin, styles.inputError].join(' ') : [styles.user_input, styles.noSpin].join(' ')}
          />
          {
            formik.errors.phoneNumber && formik.touched.phoneNumber 
            ? <span className={styles.error}>{formik.errors.phoneNumber}</span> 
            : null
          }
        </div>
        <div className={styles.navigation}>
          <Btn title="Back" click={prevStep} bg='gray' text='white'  />
          <button disabled={formik.errors.fullName || formik.errors.email? true : false} onClick={handleOnSubmit} className={styles.button}>→</button>
        </div>
      </div>
    )
}

export default UserDetails