import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableCanvas from './TableCanvas';

describe('<TableCanvas />', () => {
  test('it should mount', () => {
    render(<TableCanvas />);
    
    const tableCanvas = screen.getByTestId('TableCanvas');

    expect(tableCanvas).toBeInTheDocument();
  });
});