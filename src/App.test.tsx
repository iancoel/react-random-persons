import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('Renderiza o app', () => {
    render(<App />);
    screen.getByText('random-users');
    screen.getByText('Buscar por idade');
    screen.getByText('Buscar por nome');
    screen.getByText('Mostrar todos os usuários');
  });
});
