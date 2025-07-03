import { render, screen } from '@testing-library/react';
import App from './app';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to My React App/i);
  expect(welcomeElement).toBeInTheDocument();
});
