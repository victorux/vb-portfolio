import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserDetails from './UserDetails'
import Success from './Success'

import { useFormik } from 'formik'
import { basicSchema } from '../../../schemas'

const UserForm = () => {

  const formik = useFormik({
    initialValues: {
      step: 1,
      message: '',
      fullName: '',
      phoneNumber: '',
      email: ''
    },
    validationSchema: basicSchema,
    validateOnMount: true,
  })

  return (
    <div>
      {
        {
          1: <UserMessage formik={formik} />,
          2: <UserDetails formik={formik} />,
          3: <Success formik={formik} />
        }[formik.values.step]
      }
    </div>
  )
}

export default UserForm
