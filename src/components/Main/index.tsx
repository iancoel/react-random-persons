import React, { useEffect, useState } from 'react';
import { Container, UserAge, UserCard, UserName } from './styles';
import api from '../../services';
import { IUsers } from '../../interfaces';

const Main: React.FC = () => {
  const [users, setUsers] = useState<IUsers[]>([]);

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
        users.map((user) => (
          <UserCard>
            <UserName>{user.name}</UserName>
            <UserAge>{user.age} anos</UserAge>
          </UserCard>
        ))
      ) : (
        <div>Nenhum usuário encontrado :c</div>
      )}
    </Container>
  );
};

export default Main;
