import * as Yup from 'yup';

//Min 5 chars, 1 upperC, 1lowerC, 1number
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = Yup.object().shape({
  username: Yup.string().min(5, 'Username must be at least 5 characters long').required('Required'),
  email: Yup.string().email('Please enter valid email').required('Required'),
  password: Yup.string()
    .min(5)
    .matches(passwordRules, {
      message: 'Please create password that contains one number, one special character and one Uppercase character',
    })
    .required('Required'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Please Enter Your Username'),
  password: Yup.string().required('Please Enter Your Password'),
});
