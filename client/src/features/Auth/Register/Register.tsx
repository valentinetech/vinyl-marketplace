import Button from 'common/components/Button';
import Input from 'common/components/Input';
import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from 'store/store';
import { registerSchema } from '../schema/authSchema';

import { reset } from 'store/slices/authSlice';
import { register } from 'store/thunks/authThunks';
import { ButtonContainer, Form, FormGroup, RegisterHeader, Section } from './Register.styles';

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

	const { username: username, email, password, passwordConfirm } = formData;

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { isLoading, isError, isSuccess } = useAppSelector((state) => state.authSlice);
	const userToken = sessionStorage.getItem('userToken');

	useEffect(() => {
		if (isSuccess || userToken) {
			toast.success(`Welcome ${username}!`);
			navigate('/dashboard');
			sessionStorage.setItem('username', username);
		}

		dispatch(reset);
	}, [isError, isSuccess, navigate, dispatch, username]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));

		void registerSchema.validate({});
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isError) toast.error('User already exists', { toastId: 'toastIdRegister' });

		const isFormValid = await registerSchema.isValid(formData, {
			abortEarly: false,
		});

		if (isFormValid) {
			const userData = {
				username: username,
				email,
				password,
				passwordConfirm,
			};
			dispatch(register(userData));
		} else {
			registerSchema.validate(formData, { abortEarly: false }).catch((error: unknown) => {
				toast.error(error instanceof Error ? error.message : 'Unknown error', { toastId: 'toastIdRegisterValidation' });
			});
		}
	};

	useEffect(() => {
		if (isLoading && (!isSuccess || !isError)) {
			toast.loading('Loging In...', { toastId: 'toastidLoading' });
		} else {
			toast.dismiss('toastidLoading');
		}
	}, [isLoading, isSuccess, isError]);

	return (
		<>
			<Header />
			<Section>
				<Form onSubmit={onSubmit}>
					<FormGroup>
						<RegisterHeader>REGISTER</RegisterHeader>
						<Input type="text" id="username" value={username} placeholder="Enter Your Name" onChange={onChange} />
						<Input type="email" id="email" value={email} placeholder="Enter Your Email" onChange={onChange} />
						<Input
							type="password"
							id="password"
							value={password}
							placeholder="Enter Your Password"
							onChange={onChange}
						/>
						<Input
							type="password"
							id="passwordConfirm"
							value={passwordConfirm}
							placeholder="Confirm Your Password"
							onChange={onChange}
						/>
						<ButtonContainer>
							<Button variant="primary" disabled={isLoading}>
								Register
							</Button>
						</ButtonContainer>
					</FormGroup>
				</Form>
			</Section>
			<Footer />
		</>
	);
};

export default Register;
