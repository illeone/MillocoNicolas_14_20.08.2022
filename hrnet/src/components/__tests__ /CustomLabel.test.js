import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomLabel from '../form/CustomLabel';

describe('CustomLabel Component', () => {
  test('renders with children and custom className', () => {
    const testMessage = 'Test Label';
    render(<CustomLabel htmlFor="testInput" className="test-class">{testMessage}</CustomLabel>);

    const label = screen.getByText(testMessage);
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('test-class');
    expect(label).toHaveAttribute('for', 'testInput');
  });
});
