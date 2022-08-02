import Button from 'common/components/Button';
import Input from 'common/components/Input';
import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';

import { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../slices/authSlice';
import { useAppDispatch, useAppSelector } from 'app/store';
import Spinner from 'common/components/Spinner';

import { Form, FormGroup, Section, LoginHeader, ButtonContainer } from './Login.styles';
import { loginSchema } from '../schema/authSchema';

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
    if (isSuccess || user) {
      toast.success(`Welcome back ${username}!`);
      navigate('/profile');
    }

    dispatch(reset);
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch, username]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isError) toast.error(message, { toastId: 'toastidPassword' });

    const isFormValid = await loginSchema.isValid(formData, {
      abortEarly: false,
    });

    if (isFormValid) {
      const userData = {
        username,
        password,
      };
      dispatch(login(userData));
    } else {
      loginSchema.validate(formData).catch((error) => {
        toast.error(error.message, { toastId: 'error' });
      });
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <>
      <Header />
      <Section>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <LoginHeader>LOGIN</LoginHeader>
            <Input type='text' id='username' value={username} placeholder='Enter Your Username' onChange={onChange} />
            <Input
              type='password'
              id='password'
              value={password}
              placeholder='Enter Your Password'
              onChange={onChange}
            />
            <ButtonContainer>
              <Button variant='primary'>Login</Button>
            </ButtonContainer>
          </FormGroup>
        </Form>
      </Section>
      <Footer />
    </>
  );
};

export default Login;
