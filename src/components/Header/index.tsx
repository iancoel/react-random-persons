import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterByAge,
  filterByName,
  removeFiltering,
} from '../../store/actions';

import { Button, HeaderStyles, HeaderTitle, Input } from './styles';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const [age, setAge] = useState<number>();
  const [name, setName] = useState<string>('');

  const handleAgeChange = () => {
    setName('');
    dispatch(filterByAge(age!));
  };

  const handleNameChange = () => {
    setAge(0);
    dispatch(filterByName(name));
  };

  const handleRemoveFiltering = () => {
    setAge(0);
    setName('');
    dispatch(removeFiltering());
  };

  return (
    <HeaderStyles>
      <HeaderTitle>random-users</HeaderTitle>
      <Input
        type="number"
        placeholder="Insira idade entre 0 e 98"
        value={age}
        onChange={(e) => {
          if (+e.target.value >= 0 && +e.target.value < 99) {
            setAge(+e.target.value);
          } else {
            setAge(0);
          }
        }}
      />
      <Button onClick={handleAgeChange}>Buscar por idade</Button>
      <Input
        placeholder="Insira nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button onClick={handleNameChange}>Buscar por nome</Button>
      <Button onClick={handleRemoveFiltering}>Mostrar todos os usuários</Button>
    </HeaderStyles>
  );
};

export default Header;
