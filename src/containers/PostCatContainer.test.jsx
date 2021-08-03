import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PostCatContainer from './PostCatContainer';

describe('PostCat Container', () => {
  it('renders PostCat', async () => {
    render(<PostCatContainer />);
  });
});

