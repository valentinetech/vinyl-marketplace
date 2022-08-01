import Button from 'common/components/Button';
import Input from 'common/components/Input';
import Spinner from 'common/components/Spinner';
import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../reducers/authSlice';
import { useAppDispatch, useAppSelector } from 'app/store';

import { Section, Form, FormGroup, RegisterH3, ButtonContainer } from './Register.styles';

interface RegisterProps {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Register = () => {
  const [formData, setFormData] = useState<RegisterProps>({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { username, email, password, passwordConfirm } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate('/profile');

    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      toast.error('Passwords does not match, please re-enter');
    } else {
      const userData = {
        username,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Header />
      <Section>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <RegisterH3>Register...</RegisterH3>
            <Input type='text' id='username' value={username} placeholder='Enter Your Name' onChange={onChange} />
            <Input type='text' id='email' value={email} placeholder='Enter Your Email' onChange={onChange} />
            <Input
              type='password'
              id='password'
              value={password}
              placeholder='Enter Your Password'
              onChange={onChange}
            />
            <Input
              type='password'
              id='passwordConfirm'
              value={passwordConfirm}
              placeholder='Confirm Your Password'
              onChange={onChange}
            />
            <ButtonContainer>
              <Button variant='primary'>Register</Button>
            </ButtonContainer>
          </FormGroup>
        </Form>
      </Section>
      <Footer />
    </>
  );
};

export default Register;
