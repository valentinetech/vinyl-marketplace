import Avatar from 'common/components/Avatar';
import Button from 'common/components/Button';

import { useNavigate } from 'react-router-dom';
import { logout, reset } from 'store/slices/authSlice';
import { useAppDispatch } from 'store/store';

import { btnRoutes } from 'routes/routes';
import {
	AuthContainerDesktop,
	AvatarContainer,
	LoginButtonContainerDesktop,
	LoginButtonContainerMobile,
	RegisterButtonDesktop,
	RegisterButtonMobile,
} from './AuthButtons.styles';

interface AuthButtonsProps {
	variant: 'desktop' | 'mobile';
}

const AuthButtons = ({ variant = 'desktop' }: AuthButtonsProps) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const userToken = sessionStorage.getItem('userToken');

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/');
	};

	const ButtonsMobile = () => {
		return (
			<>
				{userToken !== null ? (
					<AvatarContainer>
						<Avatar variant="mobile" />
						<Button variant="secondary" onClick={onLogout}>
							Logout
						</Button>
					</AvatarContainer>
				) : (
					<>
						<RegisterButtonMobile to={btnRoutes.register.route}>{btnRoutes.register.title}</RegisterButtonMobile>
						<LoginButtonContainerMobile to={btnRoutes.login.route}>
							<Button>{btnRoutes.login.title}</Button>
						</LoginButtonContainerMobile>
					</>
				)}
			</>
		);
	};

	const ButtonsDesktop = () => {
		return (
			<>
				{userToken ? (
					<>
						<Avatar variant="desktop" />
						<Button variant="secondary" onClick={onLogout}>
							Logout
						</Button>
					</>
				) : (
					<AuthContainerDesktop>
						<RegisterButtonDesktop to={btnRoutes.register.route}>{btnRoutes.register.title}</RegisterButtonDesktop>
						<LoginButtonContainerDesktop to={btnRoutes.login.route}>
							<Button variant="secondary">{btnRoutes.login.title}</Button>
						</LoginButtonContainerDesktop>
					</AuthContainerDesktop>
				)}
			</>
		);
	};

	return <>{variant === 'desktop' ? <ButtonsDesktop /> : <ButtonsMobile />}</>;
};
export default AuthButtons;
