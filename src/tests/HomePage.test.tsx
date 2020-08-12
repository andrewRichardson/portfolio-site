import React from 'react';
import { render } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('renders learn react link', () => {
    const { getByText } = render(<HomePage />);
    const linkElement = getByText(/Github/i);
    expect(linkElement).toBeDefined();
});
