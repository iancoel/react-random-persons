import React, { useCallback, useEffect, useState } from 'react';
import { Container, UserAge, UserCard, UserName } from './styles';
import api from '../../services';
import { useDispatch, useSelector } from 'react-redux';
import { addAllUsers } from '../../store/actions';
import { IStoreUsers } from '../../interfaces';
import { FixedSizeList } from 'react-window';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: IStoreUsers) => state);

  useEffect(() => {
    api
      .get('/users')
      .then((response) => {
        dispatch(addAllUsers(response.data.data));
      })
      .catch((error) => console.log('Um erro aconteceu: ', error));
  }, []);

  //configuracao para o react-window
  const row = useCallback(
    ({ index, style }) => {
      // const { name, age } = !state.filteredUsers
      //   ? state.allUsers[index] || {}
      //   : state.filteredUsers[index] || {};

      // QUEBROU NA HORA DE MOSTRAR O TERNARIO AQUI EM CIMA

      const { name, age } = state.allUsers[index] || {};

      return (
        <div style={style}>
          <UserCard>
            <UserName>{name}</UserName>
            <UserAge>{age} anos</UserAge>
          </UserCard>
        </div>
      );
    },
    [state],
  );

  return (
    <Container>
      <button onClick={() => console.log(state)}>Clique-me</button>
      <FixedSizeList
        height={500}
        width={'100%'}
        itemSize={100}
        itemCount={state.allUsers.length}
      >
        {row}
      </FixedSizeList>
    </Container>
  );
};

export default Main;
