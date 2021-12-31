import React, { useCallback, useEffect, useState } from 'react';
import { Container, UserAge, UserCard, UserName } from './styles';
import api from '../../services';
import { IUser } from '../../interfaces';
import { FixedSizeList } from 'react-window';

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

  //configuracao para o react-window
  const row = useCallback(
    ({ index, style }) => {
      const { name, age } = users[index] || {};

      return (
        <div style={style}>
          <UserCard key={index}>
            <UserName>{name}</UserName>
            <UserAge>{age} anos</UserAge>
          </UserCard>
        </div>
      );
    },
    [users],
  );

  return (
    <Container>
      <FixedSizeList
        height={500}
        width={'100%'}
        itemSize={100}
        itemCount={users.length}
      >
        {row}
      </FixedSizeList>
    </Container>
  );
};

export default Main;
