import Button from 'components/elements/Button';
import { Howl, Howler } from 'howler';

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
  setPreviewUrl,
  countdownTitle,
  countdown,
  bidLast,
  buttonText,
}: {
  albumCover: string;
  albumName: string;
  artistName: string;
  countdownTitle?: string;
  countdown?: string;
  bidLast?: string;
  buttonText?: string;
  setPreviewUrl: () => void;
}) => {
  return (
    <CardContainer>
      <CardImg src={albumCover}></CardImg>
      <AlbumName>{albumName}</AlbumName>
      <ArtistName>{artistName}</ArtistName>
      <StaticContainer>
        <SpotifyIconButton onClick={setPreviewUrl}>▶ II</SpotifyIconButton>
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
