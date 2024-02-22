import React from 'react';
import { render, screen } from '@testing-library/react';
import BottomTableControls from '../table/BottomTableControls';

jest.mock('../buttons/DeleteButton', () => () => <div data-testid="delete-button" />);
jest.mock('../buttons/Pagination', () => () => <div data-testid="pagination" />);

describe('BottomTableControls component', () => {
  test('renders DeleteButton and Pagination', () => {
    const props = {
      currentPage: 1,
      pageCount: 10,
      onPageChange: jest.fn(),
      onDelete: jest.fn(),
      showDelete: true
    };
    
    render(<BottomTableControls {...props} />);
    
    expect(screen.getByTestId('delete-button')).toBeInTheDocument();
    expect(screen.getByTestId('pagination')).toBeInTheDocument();
  });
});
