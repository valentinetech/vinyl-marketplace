import { useNavigate } from 'react-router-dom';
import { AvatarButtonMobile, AvatarButtonDesktop } from './Avatar.styles';

interface AvatarProps {
  variant: 'desktop' | 'mobile';
}

const Avatar = ({ variant = 'desktop' }: AvatarProps) => {
  const navigate = useNavigate();

  return (
    <>
      {variant === 'desktop' ? (
        <AvatarButtonDesktop onClick={() => navigate('/profile')}></AvatarButtonDesktop>
      ) : (
        <AvatarButtonMobile onClick={() => navigate('/profile')}></AvatarButtonMobile>
      )}
    </>
  );
};

export default Avatar;
