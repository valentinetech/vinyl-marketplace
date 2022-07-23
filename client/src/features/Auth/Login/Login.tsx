import Button from 'common/components/Button';
import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';

import { useState } from 'react';
import { Form, FormGroup, Input, Section } from './Login.styles';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
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
