import { render, screen } from '@testing-library/react';
import { act } from 'react';
import '@testing-library/jest-dom'; // Add this line
import App from './App';

test('renders welcome message', () => {
  act(() => {
    render(<App />);
  });
  const welcomeElement = screen.getByText(/Welcome to My React App/i);
  expect(welcomeElement).toBeInTheDocument();
});