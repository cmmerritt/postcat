import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Sidebar from './Sidebar';

describe('Sidebar component', () => {
  afterEach(() => cleanup());
  it('renders Sidebar', () => {
    const { asFragment } = render(<Sidebar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
