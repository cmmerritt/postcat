import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SidebarItem from './SidebarItem';

describe('SidebarItem component', () => {
  afterEach(() => cleanup());
  it('renders SidebarItem', () => {
    const { asFragment } = render(<SidebarItem />);
    expect(asFragment()).toMatchSnapshot();
  });
});
