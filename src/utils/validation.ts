import * as yup from 'yup'

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter with a valid email')
    .required('Please enter your email'),
  password: yup.string().required('Please enter your password')
})
