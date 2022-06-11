import albumCover from 'assets/images/kendrick-lamar_damn.jpeg';
import Button from 'components/elements/Button';
import { useSpotify } from 'hooks/useSpotify';
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

interface getSongProps {
  song: string;
  getSong: () => void;
  playSong: () => void;
}

const Card = () => {
  const { data, done, error } = useSpotify<getSongProps[]>('url');

  return (
    <CardContainer>
      <CardImg src={albumCover}></CardImg>
      <AlbumName>DAMN</AlbumName>
      <ArtistName>Kendrick Lamar</ArtistName>
      <SpotifyIconButton>{done ? '▶' : '⏹'}</SpotifyIconButton>
      <CountdownTitle>Time Remaining</CountdownTitle>
      <Countdown>00:10:00</Countdown>
      <BidContainer>
        <BidLast>Last Bid $50</BidLast>
        <Bid>
          <Button variant='secondary'>Place Bid</Button>
        </Bid>
      </BidContainer>
    </CardContainer>
  );
};

export default Card;
