import Button from 'common/components/Button';
import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import { theme } from 'common/styles/theme';
import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Form = styled.form`
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin-bottom: 10px;
  font-family: inherit;
`;

const Input = styled.input`
  border: 1px solid white;
  border-radius: 10px;
  padding: 5px;
  background-color: ${theme.colors.body};
  color: ${theme.colors.white};
  margin-bottom: 10px;
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

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
            <Input type='text' id='email' value={email} placeholder='Enter Your Email' onChange={onChange} />
            <Input type='password' id='password' value={password} placeholder='Enter Password' onChange={onChange} />
            <Button variant='primary'>Login</Button>
          </FormGroup>
        </Form>
      </Section>
      <Footer />
    </>
  );
};

export default Login;

//Edit header - remove Home links - make header more generic
