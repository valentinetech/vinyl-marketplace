import styled from 'styled-components';
import albumImage from 'assets/images/hero-image.png';

const CardContainer = styled.div`
  height: 450px;
  width: 350px;
  border: 1px solid #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const CardImg = styled.img`
  width: 250px;
  height: 250px;
  padding: 0px;
`;

const AlbumName = styled.h3``;

const AlbumArtist = styled.h4``;

const Countdown = styled.p``;

const Card = () => {
  return (
    <CardContainer>
      <CardImg src={albumImage}></CardImg>
    </CardContainer>
  );
};

export default Card;
