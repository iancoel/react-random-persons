import React, { useEffect, useState } from 'react';
import { Container, UserAge, UserCard, UserName } from './styles';
import api from '../../services';

const Main: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users').then((response) => {
      console.log(response.status);
      setUsers(response.data);
    });
  }, []);

  return (
    <Container>
      <button onClick={() => console.log(users)}>Clique-me</button>
      <UserCard>
        <UserName>Ian</UserName>
        <UserAge>25 anos</UserAge>

        {users?.map((user) => (
          <UserCard>
            <UserName>{user.name}</UserName>
            <UserAge></UserAge>
          </UserCard>
        ))}
      </UserCard>
    </Container>
  );
};

export default Main;
