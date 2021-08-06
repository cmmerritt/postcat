import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header.jsx';

describe('Header component', () => {
  afterEach(() => cleanup());
  it('renders Header', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
