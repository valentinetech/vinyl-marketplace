import { useNavigate } from 'react-router-dom';
import { AvatarButtonDesktop, AvatarButtonMobile } from './Avatar.styles';

interface AvatarProps {
	variant: 'desktop' | 'mobile';
}

const Avatar = ({ variant = 'desktop' }: AvatarProps) => {
	const navigate = useNavigate();
	const navigateToProfile = () => navigate('/profile');
	if (variant === 'desktop') {
		return <AvatarButtonDesktop onClick={navigateToProfile}></AvatarButtonDesktop>;
	}
	return <AvatarButtonMobile onClick={navigateToProfile}></AvatarButtonMobile>;
};

export default Avatar;
