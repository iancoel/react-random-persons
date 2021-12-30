import React from 'react';
import {
  AllUsersButton,
  HeaderStyles,
  HeaderTitle,
  SearchInput,
} from './styles';

const Header = () => {
  return (
    <HeaderStyles>
      <HeaderTitle>random-users</HeaderTitle>
      <SearchInput placeholder="Insira idade" />
      <AllUsersButton>Mostrar todos os usuários</AllUsersButton>
    </HeaderStyles>
  );
};

export default Header;
