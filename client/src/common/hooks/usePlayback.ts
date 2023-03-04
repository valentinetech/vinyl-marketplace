import { useEffect } from 'react';

interface usePlaybackProps {
	previewUrl: string;
	previewDuration: number;
	setPreviewUrl: (arg0: undefined) => void;
}

const usePlayback = ({ previewUrl, previewDuration, setPreviewUrl }: usePlaybackProps) => {
	useEffect(() => {
		const audio = new Audio(previewUrl);
		audio.play();
		setTimeout(() => setPreviewUrl(undefined), previewDuration);

		return () => {
			audio.pause();
		};
	}, [previewUrl]);

	return previewUrl;
};

export default usePlayback;
