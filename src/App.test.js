// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders chainVortex title', () => {
    render(<App />);
    const titleElement = screen.getByText(/chainVortex/i);
    expect(titleElement).toBeInTheDocument();
});
