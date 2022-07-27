import styled from 'styled-components';
import { theme } from 'common/styles/theme';
import { Link as LinkR } from 'react-router-dom';

export {
  LoginButtonContainerMobile,
  RegisterButtonMobile,
  LoginButtonContainerDesktop,
  RegisterButtonDesktop,
  AuthContainerDesktop,
  AvatarContainer,
};

const LoginButtonContainerMobile = styled(LinkR)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const RegisterButtonMobile = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  font-size: 18px;
  color: ${theme.colors.brandSecondary};
  text-decoration: none;
  margin-bottom: 20px;

  &:hover {
    color: ${theme.colors.brand};
  }
`;

const LoginButtonContainerDesktop = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;

  @media ${theme.device.tabletMax} {
    display: none;
  } ;
`;

const RegisterButtonDesktop = styled(LinkR)`
  display: flex;
  align-items: flex-end;
  color: ${theme.colors.brandSecondary};
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    color: ${theme.colors.brand};
  }

  @media ${theme.device.signupMax} {
    display: none;
  } ;
`;

const AuthContainerDesktop = styled.div`
  display: flex;
  align-items: center;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
