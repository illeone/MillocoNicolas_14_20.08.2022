import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DeleteButton from '../buttons/DeleteButton';

describe('DeleteButton component', () => {
    const onDelete = jest.fn();
  test('renders the DeleteButton when showDelete is true', () => {
    render(<DeleteButton onDelete={onDelete} showDelete={true} />);

    const button = screen.getByRole('button', { name: /delete/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle('display: inline-block');
  });

  test('calls onDelete when the button is clicked', () => {
    const onDelete = jest.fn();
    render(<DeleteButton onDelete={onDelete} showDelete={true} />);

    const button = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(button);
    expect(onDelete).toHaveBeenCalled();
  });

  test('does not render the DeleteButton when showDelete is false', () => {
    const onDelete = jest.fn();
    render(<DeleteButton onDelete={onDelete} showDelete={false} />);

    const button = screen.queryByRole('button', { name: /delete/i });
    expect(button).not.toBeInTheDocument();
  });
});
