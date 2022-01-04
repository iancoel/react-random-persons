/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../index';
import { Provider } from 'react-redux';
import store from '../../../store/store';

describe('Renderiza os componentes do Header', () => {
  test('Renderiza o título', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    const headerTitle = screen.getByText('random-users');

    expect(headerTitle).toBeInTheDocument();
  });

  test('Consegue-se digitar no input de idade', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    const ageInput: HTMLInputElement =
      screen.getByPlaceholderText('Idade entre 0 e 98');

    fireEvent.change(ageInput, { target: { value: 25 } });

    expect(ageInput).toBeInTheDocument();
    expect(ageInput.value).toBe('25');
  });

  test('Consegue-se digitar no input de nome', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    const nameInput: HTMLInputElement = screen.getByPlaceholderText('Nome');

    fireEvent.change(nameInput, { target: { value: 'Marina' } });

    expect(nameInput).toBeInTheDocument();
    expect(nameInput.value).toBe('Marina');
  });

  test('Botões renderizados', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    const nameButton: HTMLButtonElement = screen.getByRole('button', {
      name: 'Buscar por nome',
    });
    const allUsersButton: HTMLButtonElement = screen.getByText(
      'Mostrar todos os usuários',
    );

    expect(nameButton).toBeInTheDocument();
    expect(allUsersButton).toBeInTheDocument();
  });
});
