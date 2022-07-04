import Header from 'common/layouts/Header';
import { useState } from 'react';

const Register = () => {
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
      <div>Register</div>
    </>
  );
};

export default Register;

//Edit header - remove Home links - make header more generic
