import Button from 'common/components/Button';
import Card from 'common/components/Card';
import useSpotifyGetAlbums from 'common/hooks/useSpotifyGetAlbums';
import { useEffect, useState } from 'react';
import { ExploreContainer, LoadMore, SectionContainer } from './Explore.styles';

const Explore = () => {
	const PREVIEW_LENGTH = 30000;
	const DISPLAYED_CARDS = 6;

	const { topAlbums, topAlbumsLoaded } = useSpotifyGetAlbums();
	const [displayedAlbumCount, setDisplayedAlbumCount] = useState<number>(DISPLAYED_CARDS);
	const [audioPlaying, setAudioPlaying] = useState<string>();
	const canLoadMore = topAlbums && topAlbums.length > displayedAlbumCount;

	useEffect(() => {
		const audio = new Audio(audioPlaying);
		const timeout = setTimeout(() => setAudioPlaying(undefined), PREVIEW_LENGTH);

		audio.play().catch((error: Error) => {
			if (error.name !== 'AbortError') {
				console.error(error);
			}
		});

		return () => {
			audio.pause();
			clearTimeout(timeout);
		};
	}, [audioPlaying]);

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
									setPreviewUrl={() => setAudioPlaying(audioPlaying === preview_url ? undefined : preview_url)}
									spotifyButtonText={audioPlaying === preview_url ? '❚❚' : '▶'}
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
