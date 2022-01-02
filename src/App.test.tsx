import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('Renderiza o app', () => {
    render(<App />);

    screen.debug();
  });
});
