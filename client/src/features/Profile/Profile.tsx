import { useAppDispatch, useAppSelector } from 'app/store';
import axios from 'axios';
import Header from 'common/layouts/Header';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
`;

interface Props {
  user: {
    user: {
      username: string;
    };
  };
}

const Profile = () => {
  const username = localStorage.getItem('user');

  return (
    <>
      <Header />
      <div>
        <h3>{username}</h3>
      </div>
    </>
  );
};

export default Profile;
