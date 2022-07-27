import Button from 'common/components/Button';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  margin: 50px;
  height: 400px;
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Section>
        <h2>404: This page doesn't exit.</h2>
        <Button variant='primary' onClick={() => navigate('/')}>
          Go to HomePage...
        </Button>
      </Section>
    </>
  );
};
export default NotFound;
