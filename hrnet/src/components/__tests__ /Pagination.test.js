import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Pagination from '../buttons/Pagination';

describe('Pagination component', () => {
  test('renders previous, next, and page buttons correctly', () => {
    const onPageChange = jest.fn();

    render(<Pagination currentPage={1} pageCount={3} onPageChange={onPageChange} />);

    const prevButton = screen.getByRole('button', { name: /«/i });
    const nextButton = screen.getByRole('button', { name: /»/i });
    const pageButtons = screen.getAllByRole('button', { name: /^\d+$/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pageButtons).toHaveLength(3);
  });

  test('calls onPageChange when previous or next buttons are clicked', () => {
    const onPageChange = jest.fn();

    render(<Pagination currentPage={1} pageCount={3} onPageChange={onPageChange} />);

    const prevButton = screen.getByRole('button', { name: /«/i });
    const nextButton = screen.getByRole('button', { name: /»/i });

    fireEvent.click(prevButton);
    expect(onPageChange).toHaveBeenCalledWith(0);

    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  test('calls onPageChange when a page button is clicked', () => {
    const onPageChange = jest.fn();

    render(<Pagination currentPage={1} pageCount={3} onPageChange={onPageChange} />);

    const pageButtons = screen.getAllByRole('button', { name: /^\d+$/i });

    fireEvent.click(pageButtons[0]);
    expect(onPageChange).toHaveBeenCalledWith(0);

    fireEvent.click(pageButtons[2]);
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});
