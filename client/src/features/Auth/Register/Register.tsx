import Button from 'common/components/Button';
import Input from 'common/components/Input';
import Spinner from 'common/components/Spinner';
import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { register, reset } from '../slices/authSlice';
import { useAppDispatch, useAppSelector } from 'app/store';
import { registerSchema } from '../schema/authSchema';

import { Section, Form, FormGroup, RegisterHeader, ButtonContainer } from './Register.styles';

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

	const { userToken, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (isSuccess || userToken) {
			toast.success(`Welcome ${username}!`);
			navigate('/profile');
		}

		dispatch(reset);
	}, [userToken, isError, isSuccess, message, navigate, dispatch, username]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));

		registerSchema.validate({});
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (isError) toast.error(message, { toastId: 'toastIdRegister' });

		const isFormValid = await registerSchema.isValid(formData, {
			abortEarly: false,
		});

		if (isFormValid) {
			const userData = {
				username,
				email,
				password,
				passwordConfirm,
			};
			dispatch(register(userData));
		} else {
			registerSchema.validate(formData, { abortEarly: false }).catch((error) => {
				toast.error(error.message, { toastId: 'toastIdRegisterValidation' });
			});
		}
		// if (password !== passwordConfirm) {
		//   toast.error('Passwords does not match, please re-enter');
		// } else {
		//   const userData = {
		//     username,
		//     email,
		//     password,
		//   };
		//   dispatch(register(userData));
		// }
	};

	if (isLoading) return <Spinner />;

	return (
		<>
			<Header />
			<Section>
				<Form onSubmit={onSubmit}>
					<FormGroup>
						<RegisterHeader>REGISTER</RegisterHeader>
						<Input type='text' id='username' value={username} placeholder='Enter Your Name' onChange={onChange} />
						<Input type='email' id='email' value={email} placeholder='Enter Your Email' onChange={onChange} />
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
