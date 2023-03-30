import Stack from '@mui/material/Stack';
import React from 'react';
import Navbar from '../components/layout/Navbar';
import FriendRequests from '../components/people/FriendRequests';
import NetworkList from '../components/people/NetworkList';
import UserFeeds from '../components/people/UserFeeds';

const People = () => {
  return (
    <>
      <Navbar />
      <Stack direction="row" spacing={10}>
        <NetworkList />
        <UserFeeds />
        <FriendRequests />
      </Stack>
    </>
  );
};

export default People;
