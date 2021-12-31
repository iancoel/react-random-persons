import React from 'react';
import { Button, HeaderStyles, HeaderTitle, Input } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <HeaderTitle>random-users</HeaderTitle>
      <Input placeholder="Insira idade" />
      <Button>Buscar por idade</Button>
      <Input placeholder="Insira nome" />
      <Button>Buscar por nome</Button>
      <Button>Mostrar todos os usuários</Button>
    </HeaderStyles>
  );
};

export default Header;
