import React from 'react'
import UserForm from '../UserForm/UserForm.jsx'
import styles from '../../../styles/contacts.module.scss'


function index() {
  return (
    <div className={styles.chat}>
      <UserForm />
    </div>
  )
}

export default index