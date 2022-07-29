import * as yup from 'yup';


export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  fullName: yup.string().min(5, 'Full name must be at least 5 characters').required("Required"),
  message: yup.string().min(10, 'Message must be at least 10 characters').required("Required"),
  phoneNumber: yup.number().integer().min(7, 'Must be greater than 7 digits').max(14)
});