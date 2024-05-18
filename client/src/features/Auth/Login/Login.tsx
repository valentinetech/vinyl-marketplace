import Button from 'common/components/Button';
import Input from 'common/components/Input';
import Footer from 'common/layouts/Footer';
import Header from 'common/layouts/Header';

import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'app/store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../store/authSlice';

import { loginSchema } from '../schema/authSchema';
import { ButtonContainer, Form, FormGroup, LoginHeader, Section } from './Login.styles';

const Login = () => {
	const [formData, setFormData] = useState<{ username: string; password: string }>({
		username: '',
		password: '',
	});
	const { username, password } = formData;

	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { isLoading, isError, isSuccess } = useAppSelector((state) => state.auth);

	useEffect(() => {
		if (isSuccess) {
			toast.success(`Welcome back ${username}!`);
			navigate('/dashboard');
			localStorage.setItem('username', username);
		}

		dispatch(reset);
	}, [isLoading, isError, isSuccess, navigate, dispatch, username]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isError) toast.error('Incorrect username or password', { toastId: 'toastidPassword' });

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
			loginSchema.validate(formData).catch((error: unknown) => {
				toast.error(error instanceof Error ? error.message : 'Unknown error', { toastId: 'error' });
			});
		}
	};

	useEffect(() => {
		if (isLoading) {
			toast.loading('Loging In...', { toastId: 'toastidLoading' });
		} else {
			toast.dismiss('toastidLoading');
		}
	}, [isLoading]);

	return (
		<>
			<Header />
			<Section>
				<Form onSubmit={onSubmit}>
					<FormGroup>
						<LoginHeader>LOGIN</LoginHeader>
						<Input type="text" id="username" value={username} placeholder="Enter Your Username" onChange={onChange} />
						<Input
							type="password"
							id="password"
							value={password}
							placeholder="Enter Your Password"
							onChange={onChange}
						/>
						<ButtonContainer>
							<Button variant="primary" disabled={isLoading}>
								Login
							</Button>
						</ButtonContainer>
					</FormGroup>
				</Form>
			</Section>
			<Footer />
		</>
	);
};

export default Login;
