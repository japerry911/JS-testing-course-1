import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color and changes when clicked', () => {
  render(<App />);
  const colorBtn = screen.getByRole('button', { name: /Change to blue/ });

  // Check Style
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' });

  // Click Button
  fireEvent.click(colorBtn);

  // Check Style
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });

  // Check Button Text
  expect(colorBtn.textContent).toBe('Change to red');
});

test('Initial conditions', () => {
  render(<App />);

  // check that btn starts enabled
  const colorBtn = screen.getByRole('button', { name: /Change to blue/ });
  expect(colorBtn).toBeEnabled();

  // checkbox is unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});
