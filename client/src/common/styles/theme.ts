export interface ThemeProps {
	theme: {
		colors: string;
		fontSize: string;
		fontWeight: string;
		device: string;
	};
}

export const theme = {
	colors: {
		body: '#2B2B2B',
		brand: '#F8D57E',
		brandSecondary: '#BFAFF2',
		textPrimary: '#FDFDFD',
		textSecondary: '#3B393C',
		white: '#ffff',
		blue: '#0A122A',
		close: '#F45B69',
	},
	fontSize: {
		h1Size: '70px',
		h2Size: '48px',
		h3Size: '28px',
		h4Size: '20px',
		h5Size: '18px',
		pSize: '16px',
		buttonSize: '18px',
		linkSize: '18px',
	},
	fontWeight: {
		regular: '400',
		semiBold: '600',
		bold: '700',
	},
	device: {
		mobileS: `(min-width: 320px)`,
		mobileM: `(min-width: 375px)`,
		mobileL: `(min-width: 425px)`,
		tabletMin: `(min-width: 768px)`,
		tabletMax: `(max-width: 768px)`,
		laptop: `(min-width: 1024px)`,
		laptopL: `(min-width: 1440px)`,
		desktop: `(min-width: 2560px)`,
		signupMax: `(max-width: 888px)`,
		default: `(max-width: 1100px)`,
	},
};
