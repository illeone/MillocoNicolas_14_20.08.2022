import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../buttons/ValidButton';

describe('Button component', () => {
  test('renders the text prop correctly', () => {
    render(<Button text="Test Button" action={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('Test Button');
  });

  // test que le bouton est fonctionnel et qu'il déclenche l'événement
  test('is clickable and triggers the action prop', () => {
    const mockAction = jest.fn();
    render(<Button text="Click Me" action={mockAction} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
