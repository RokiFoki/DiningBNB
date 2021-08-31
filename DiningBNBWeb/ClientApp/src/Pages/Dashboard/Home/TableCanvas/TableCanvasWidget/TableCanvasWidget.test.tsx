import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TableCanvasWidget from './TableWidgets/RoundTable4ChairsWidget';

describe('<TableCanvasWidget />', () => {
  test('it should mount', () => {
    render(<TableCanvasWidget />);
    
    const tableCanvasWidget = screen.getByTestId('TableCanvasWidget');

    expect(tableCanvasWidget).toBeInTheDocument();
  });
});