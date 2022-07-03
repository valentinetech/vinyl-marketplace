import Button from 'common/components/Button';

import {
  CardContainer,
  CardImg,
  AlbumName,
  ArtistName,
  StaticContainer,
  SpotifyIconButton,
  CountdownTitle,
  Countdown,
  BidContainer,
  BidLast,
  Bid,
} from './Card.styles';

interface CardProps {
  albumCover: string;
  albumName: string;
  artistName: string;
  countdownTitle?: string;
  countdown?: string;
  bidLast?: string;
  buttonText?: string;
  setPreviewUrl: () => void;
  spotifyButtonText: string;
}

const Card = ({
  albumCover,
  albumName,
  artistName,
  setPreviewUrl,
  countdownTitle,
  countdown,
  bidLast,
  buttonText,
  spotifyButtonText,
}: CardProps) => {
  return (
    <CardContainer>
      <CardImg src={albumCover}></CardImg>
      <AlbumName>{albumName}</AlbumName>
      <ArtistName>{artistName}</ArtistName>
      <StaticContainer>
        <SpotifyIconButton onClick={setPreviewUrl}>{spotifyButtonText}</SpotifyIconButton>
        <CountdownTitle>{(countdownTitle = 'Time Remaining')}</CountdownTitle>
        <Countdown>{(countdown = '00:10:00')}</Countdown>
        <BidContainer>
          <BidLast>{(bidLast = 'Last Bid $50')}</BidLast>
          <Bid>
            <Button variant='secondary'>{(buttonText = 'Place Bid')}</Button>
          </Bid>
        </BidContainer>
      </StaticContainer>
    </CardContainer>
  );
};

export default Card;
