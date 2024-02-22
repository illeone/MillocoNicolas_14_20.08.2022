import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateInput from '../inputs/DateInput';

describe('DateInput Component', () => {
  // Test pour vérifier le rendu du label
  test('renders label with provided text', () => {
    render(
      <DateInput
        id="test-date"
        name="testDate"
        value=""
        handleChange={() => {}}
        labelText="Test Date"
        labelClassName="test-label"
        inputClassName="test-input"
        error=""
        isSubmitted={false}
      />
    );

    expect(screen.getByLabelText(/Test Date/i)).toBeInTheDocument();
  });

  // Test pour vérifier l'affichage du message d'erreur
  test('displays error message when isSubmitted is true and error is not empty', () => {
    render(
      <DateInput
        id="test-date"
        name="testDate"
        value=""
        handleChange={() => {}}
        labelText="Test Date"
        labelClassName="test-label"
        inputClassName="test-input"
        error="This field is required"
        isSubmitted={true}
      />
    );

    expect(screen.getByText('* This field is required')).toBeInTheDocument();
  });
});
