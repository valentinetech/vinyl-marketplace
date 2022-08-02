import { btnRoutes } from 'config/config';
import Button from 'common/components/Button';
import Avatar from 'common/components/Avatar';

import { useAppSelector, useAppDispatch } from 'app/store';
import { logout, reset } from 'features/Auth/slices/authSlice';
import { useNavigate } from 'react-router-dom';

import {
  LoginButtonContainerMobile,
  RegisterButtonMobile,
  LoginButtonContainerDesktop,
  RegisterButtonDesktop,
  AuthContainerDesktop,
  AvatarContainer,
} from './AuthButtons.styles';

interface AuthButtonsProps {
  variant: 'desktop' | 'mobile';
}

const AuthButtons = ({ variant = 'desktop' }: AuthButtonsProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  const ButtonsMobile = () => {
    return (
      <>
        {user !== null ? (
          <AvatarContainer>
            <Avatar variant='mobile' />
            <Button variant='secondary' onClick={onLogout}>
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
        {user ? (
          <>
            <Avatar variant='desktop' />
            <Button variant='secondary' onClick={onLogout}>
              Logout
            </Button>
          </>
        ) : (
          <AuthContainerDesktop>
            <RegisterButtonDesktop to={btnRoutes.register.route}>{btnRoutes.register.title}</RegisterButtonDesktop>
            <LoginButtonContainerDesktop to={btnRoutes.login.route}>
              <Button variant='secondary'>{btnRoutes.login.title}</Button>
            </LoginButtonContainerDesktop>
          </AuthContainerDesktop>
        )}
      </>
    );
  };

  return <>{variant === 'desktop' ? <ButtonsDesktop /> : <ButtonsMobile />}</>;
};
export default AuthButtons;
