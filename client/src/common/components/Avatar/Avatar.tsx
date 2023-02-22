import { useNavigate } from 'react-router-dom';
import { AvatarButtonMobile, AvatarButtonDesktop } from './Avatar.styles';

interface AvatarProps {
	variant: 'desktop' | 'mobile';
}

const Avatar = ({ variant = 'desktop' }: AvatarProps) => {
	function NavigateToProfilePage() {
		const navigate = useNavigate();
		navigate('/profile');
	}

	if (variant === 'desktop') {
		return <AvatarButtonDesktop onClick={NavigateToProfilePage}></AvatarButtonDesktop>;
	}
	return <AvatarButtonMobile onClick={NavigateToProfilePage}></AvatarButtonMobile>;
};

export default Avatar;
