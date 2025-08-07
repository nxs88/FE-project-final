import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  it('Отображает логотип', () => {
    render(
      <MemoryRouter>
        <Header />;
      </MemoryRouter>
    );
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
  });
  it('отображает текст ".FrontEnd"', () => {
    render(
      <MemoryRouter>
        <Header />;
      </MemoryRouter>
    );
    expect(screen.getByText('.FrontEnd')).toBeInTheDocument();
  });
  it('отображает страницы "Вакансии FE" и "Обо мне"', () => {
    render(
      <MemoryRouter>
        <Header />;
      </MemoryRouter>
    );
    expect(screen.getByText('Вакансии FE')).toBeInTheDocument();
    expect(screen.getByText('Обо мне')).toBeInTheDocument();
  });
  it('отображает иконку пользователя в блоке "Обо мне"', () => {
    render(
      <MemoryRouter>
        <Header />;
      </MemoryRouter>
    );
    const userIcon = screen.getByTestId('aboutImg');
    expect(userIcon).toBeInTheDocument();
  });
});
