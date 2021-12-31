import React, { useCallback, useEffect } from 'react';
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
  }, [dispatch]);

  //configuracao para o react-window
  const row = useCallback(
    ({ index, style }) => {
      // const { name, age } = !state.filteredUsers
      //   ? state.allUsers[index] || {}
      //   : state.filteredUsers[index] || {};

      // QUEBROU NA HORA DE MOSTRAR O TERNARIO AQUI EM CIMA

      let name: string = '';
      let age: number = 0;

      if (state.filteredUsers.length === 0) {
        name = state.allUsers[index].name;
        age = state.allUsers[index].age;
      } else {
        name = state.filteredUsers[index]?.name;
        age = state.filteredUsers[index]?.age;
      }

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
      {state.allUsers.length > 0 ? (
        <FixedSizeList
          height={500}
          width={'100%'}
          itemSize={100}
          itemCount={state.allUsers.length}
        >
          {row}
        </FixedSizeList>
      ) : (
        <div>Carregando todos os nomes...</div>
      )}
    </Container>
  );
};

export default Main;
