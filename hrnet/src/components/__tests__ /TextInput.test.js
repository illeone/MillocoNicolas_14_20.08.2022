import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextInput from '../inputs/TextInput';

describe('TextInput component', () => {
  test('renders input and label correctly', () => {
    render(
      <TextInput
        id="test-input"
        name="testInput"
        labelText="Test Input"
        labelClassName="test-label"
        inputClassName="test-input"
      />
    );

    const input = screen.getByRole('textbox', { name: /test input/i });
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('name', 'testInput');
    expect(input).toHaveClass('test-input');

    const label = screen.getByText(/test input/i);
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('test-label');
  });

  test('calls handleChange when the input value is changed', () => {
    const handleChange = jest.fn();

    render(
      <TextInput
        id="test-input"
        name="testInput"
        labelText="Test Input"
        labelClassName="test-label"
        inputClassName="test-input"
        handleChange={handleChange}
      />
    );

    const input = screen.getByRole('textbox', { name: /test input/i });
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
