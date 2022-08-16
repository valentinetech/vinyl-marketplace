import Button from 'common/components/Button';
import Card from 'common/components/Card';
import Spinner from 'common/components/Spinner';
import useSpotifyPreview from 'features/Home/Hooks/useSpotifyPreview';
import { useState, useEffect } from 'react';

import { SectionContainer, SectionName, ExploreContainer, LoadMore } from './Explore.styles';

const PREVIEW_LENGTH = 30000;

const Explore = () => {
	const { topAlbums, topAlbumsLoaded } = useSpotifyPreview();
	const [displayedAlbumCount, setDisplayedAlbumCount] = useState<number>(6);
	const [previewUrl, setPreviewUrl] = useState<string>();

	const canLoadMore = topAlbums && topAlbums.length > displayedAlbumCount;

	useEffect(() => {
		const audio = new Audio(previewUrl);
		audio.play();
		setTimeout(() => setPreviewUrl(undefined), PREVIEW_LENGTH);

		return () => {
			audio.pause();
		};
	}, [previewUrl]);

	return (
		<>
			<SectionContainer id='explore'>
				<SectionName>Explore</SectionName>
			</SectionContainer>
			<ExploreContainer>
				{topAlbumsLoaded ? (
					topAlbums
						?.map(({ album, preview_url }) => {
							return (
								<Card
									key={album.artists[0].id}
									albumName={album.name}
									albumCover={album.images[0].url}
									artistName={album.artists[0].name}
									setPreviewUrl={() => setPreviewUrl(previewUrl === preview_url ? undefined : preview_url)}
									spotifyButtonText={previewUrl === preview_url ? '❚❚' : '▶'}
								/>
							);
						})
						.slice(0, displayedAlbumCount)
				) : (
					<h2>Loading...</h2>
				)}
			</ExploreContainer>

			{canLoadMore && (
				<LoadMore>
					<Button onClick={() => setDisplayedAlbumCount((curr) => curr + 3)}>Load More...</Button>
				</LoadMore>
			)}
		</>
	);
};

export default Explore;
