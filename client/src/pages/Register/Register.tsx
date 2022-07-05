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

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { name, email, password, passwordConfirm } = formData;

  const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.target as HTMLInputElement;

    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <Section>
        <Form onSubmit={onSubmit}>
          <h3>Please Register</h3>
          <FormGroup>
            <Input type='text' id='name' value={name} placeholder='Enter Your Name' onChange={onChange} />
            <Input type='text' id='email' value={email} placeholder='Enter Your Email' onChange={onChange} />
            <Input type='password' id='password' value={password} placeholder='Enter Password' onChange={onChange} />
            <Input
              type='password'
              id='passwordRepeat'
              value={passwordConfirm}
              placeholder='Confirm Password'
              onChange={onChange}
            />
            <Button variant='primary'>Register</Button>
          </FormGroup>
        </Form>
      </Section>
      <Footer />
    </>
  );
};

export default Register;

//Edit header - remove Home links - make header more generic
