import Header from 'common/layouts/Header';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  return (
    <>
      <Header />
      <h1></h1>
      <div>Login</div>
    </>
  );
};

export default Login;
