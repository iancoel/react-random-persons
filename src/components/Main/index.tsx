import React from 'react';
import { Container, UserAge, UserCard, UserName } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <UserCard>
        <UserName>Ian</UserName>
        <UserAge>25 anos</UserAge>
      </UserCard>
      <UserCard>
        <UserName>Ian</UserName>
        <UserAge>25 anos</UserAge>
      </UserCard>
      <UserCard>
        <UserName>Ian</UserName>
        <UserAge>25 anos</UserAge>
      </UserCard>
      <UserCard>
        <UserName>Ian</UserName>
        <UserAge>25 anos</UserAge>
      </UserCard>
      <UserCard>
        <UserName>Ian</UserName>
        <UserAge>25 anos</UserAge>
      </UserCard>
    </Container>
  );
};

export default Main;
