import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import PostCatContainer from './PostCatContainer';

describe('PostCat Container', () => {
  it('renders PostCat', async () => {
    render(<MemoryRouter><PostCatContainer /></MemoryRouter>);

    // test getting URL user types in
    const userURL = await screen.findByPlaceholderText('URL');
    fireEvent.change(userURL,
      { target:
        { value: 'https://rickandmortyapi.com/api/character' }
      });
    expect(userURL.value).toBe('https://rickandmortyapi.com/api/character');

    // test getting selected radio button value
    const selectedButton = await screen.findByLabelText('GET');
    userEvent.click(selectedButton);
    fireEvent.change(selectedButton, 
      { target: 
        { value: 'GET' }
      });
    expect(selectedButton).toBeChecked('GET');

    // test user entering request body text

    const body = await screen.findByPlaceholderText('Raw JSON Body');
    fireEvent.change(body,
      { target: 
        { value: '{hi: all you cool cats and kittens}' }
      });
    expect(body.value).toBe('{hi: all you cool cats and kittens}');

    // test user clicking submit button

    // test history displaying on sidebar

  });
});

