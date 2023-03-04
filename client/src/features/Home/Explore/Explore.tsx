import Button from 'common/components/Button';
import Card from 'common/components/Card';
import useSpotifyGetAlbums from 'common/hooks/useSpotifyGetAlbums';
import { useState, useEffect } from 'react';
import { SectionContainer, ExploreContainer, LoadMore } from './Explore.styles';

const Explore = () => {
	const PREVIEW_LENGTH = 30000;
	const DISPLAYED_CARDS = 6;

	const { topAlbums, topAlbumsLoaded } = useSpotifyGetAlbums();
	const [displayedAlbumCount, setDisplayedAlbumCount] = useState<number>(DISPLAYED_CARDS);
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
			<SectionContainer id="featured">
				<h2>Featured</h2>
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
					<h3>Loading...</h3>
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
