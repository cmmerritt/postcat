import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Fetcher from './Fetcher.jsx';

describe('Fetcher component', () => {
  afterEach(() => cleanup());
  it('renders Fetcher', () => {
    const { asFragment } = render(<Fetcher />);
    expect(asFragment()).toMatchSnapshot();
  });
});
