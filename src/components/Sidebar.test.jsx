/* eslint-disable max-len */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Sidebar from './Sidebar.jsx';

describe('Sidebar component', () => {
  const history = [{ method: 'GET', url: 'https://rickandmortyapi.com/api/character' }];

  afterEach(() => cleanup());
  it('renders Sidebar', () => {
    const { asFragment } = render(<Sidebar history={history}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
