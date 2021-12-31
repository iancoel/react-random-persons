import React, { useEffect, useState } from 'react';
import { Container, UserAge, UserCard, UserName } from './styles';
import api from '../../services';
import { IUser } from '../../interfaces';

const Main: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api
      .get('/users')
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => console.log('Um erro aconteceu: ', error));
  }, []);

  return (
    <Container>
      {users.length > 0 ? (
        users.map((user, index) => (
          <UserCard key={index}>
            <UserName>{user.name}</UserName>
            <UserAge>{user.age} anos</UserAge>
          </UserCard>
        ))
      ) : (
        <p>Nenhum usuário encontrado :c</p>
      )}
    </Container>
  );
};

export default Main;
