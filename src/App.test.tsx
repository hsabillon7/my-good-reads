import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render empty list wishlist', () => {
  const { getByText } = render(<App />);
  const wishlistElement = getByText(/Your wishlist is empty/i);
  expect(wishlistElement).toBeInTheDocument();
});