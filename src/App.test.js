// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LendLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/LendLink/i);
    expect(titleElement).toBeInTheDocument();
});
