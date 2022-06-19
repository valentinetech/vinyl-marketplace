import Button from 'components/elements/Button';

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

const Card = ({
  albumCover,
  albumName,
  artistName,
  spotifyButton,
  countdownTitle,
  countdown,
  bidLast,
  buttonText,
  handler,
}: {
  albumCover: string;
  albumName: string;
  artistName: string;
  spotifyButton?: string;
  countdownTitle?: string;
  countdown?: string;
  bidLast?: string;
  buttonText?: string;
  handler?: { handler: string };
}) => {
  return (
    <CardContainer>
      <CardImg src={albumCover}></CardImg>
      <AlbumName>{albumName}</AlbumName>
      <ArtistName>{artistName}</ArtistName>
      <StaticContainer>
        <SpotifyIconButton>{(spotifyButton = '▶')}</SpotifyIconButton>
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
