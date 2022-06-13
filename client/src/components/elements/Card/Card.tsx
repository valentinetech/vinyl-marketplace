import Button from 'components/elements/Button';
// import useSpotify from 'hooks/useSpotify';
import {
  CardContainer,
  CardImg,
  AlbumName,
  ArtistName,
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
}: {
  albumCover: string;
  albumName: string;
  artistName: string;
  spotifyButton: string;
  countdownTitle: string;
  countdown: string;
  bidLast: string;
  buttonText: string;
}) => {
  return (
    <CardContainer>
      <CardImg src={albumCover}></CardImg>
      <AlbumName>{albumName}</AlbumName>
      <ArtistName>{artistName}</ArtistName>
      <SpotifyIconButton>{spotifyButton}</SpotifyIconButton>
      <CountdownTitle>{countdownTitle}</CountdownTitle>
      <Countdown>{countdown}</Countdown>
      <BidContainer>
        <BidLast>{bidLast} </BidLast>
        <Bid>
          <Button variant='secondary'>{buttonText}</Button>
        </Bid>
      </BidContainer>
    </CardContainer>
  );
};

export default Card;

// interface getSongProps {
//   song: string;
//   getSong: () => void;
//   playSong: () => void;}
