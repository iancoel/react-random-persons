/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react';
import Header from '../index';
import { Provider } from 'react-redux';
import store from '../../../store/store';

describe('Header', () => {
  test('Renderiza os componentes', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    const headerTitle = screen.getByText('random-users');
    const ageInput = screen.getByPlaceholderText('Idade entre 0 e 98');
    const ageButton = screen.getByText('Buscar por idade');
    const nameInput = screen.getByPlaceholderText('Nome');
    const nameButton = screen.getByText('Buscar por nome');
    const allUsersButton = screen.getByText('Mostrar todos os usuários');

    expect(headerTitle).toBeInTheDocument();
    expect(ageInput).toBeInTheDocument();
    expect(ageButton).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(nameButton).toBeInTheDocument();
    expect(allUsersButton).toBeInTheDocument();
  });
});
