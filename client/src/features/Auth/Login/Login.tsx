import Button from 'common/components/Button';
import Input from 'common/components/Input';
import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';

import { useState, useEffect } from 'react';
import { Form, FormGroup, Section } from './Login.styles';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../authSlice';
import { useAppDispatch, useAppSelector } from 'app/store';
import Spinner from 'common/components/Spinner';

interface LoginProps {
  username: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginProps>({
    username: '',
    password: '',
  });
  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate('/profile');

    return () => {
      dispatch(reset());
    };
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Header />
      <Section>
        <h3>Please Login</h3>
      </Section>
      <Section>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Input type='text' id='username' value={username} placeholder='Enter Your Username' onChange={onChange} />
            <Input
              type='password'
              id='password'
              value={password}
              placeholder='Enter Your Password'
              onChange={onChange}
            />
            <Button variant='primary'>Login</Button>
          </FormGroup>
        </Form>
      </Section>
      <Footer />
    </>
  );
};

export default Login;
