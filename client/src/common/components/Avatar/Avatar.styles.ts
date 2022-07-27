import { theme } from 'common/styles/theme';
import styled from 'styled-components';
import avatarImage from 'assets/avatar.jpg';

export { AvatarButtonDesktop, AvatarButtonMobile };

const AvatarButtonMobile = styled.button`
  margin-bottom: 30px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-size: 100px;
  background-image: url(${avatarImage});
  background-repeat: no-repeat;
  background-color: transparent;
  color: ${theme.colors.white};
  font-size: 20px;
  cursor: pointer;
`;
const AvatarButtonDesktop = styled.button`
  margin-right: 30px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-image: url(${avatarImage});
  background-repeat: no-repeat;
  background-size: 50px;
  background-color: transparent;
  color: ${theme.colors.white};
  font-size: 20px;
  cursor: pointer;
`;
