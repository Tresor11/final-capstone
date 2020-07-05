import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
import Home from '../components/Home';

test('renders learn react link', () => {
  render(
    <Router>
      <Home />
    </Router>,
  );
  expect(screen.getByText('LOGIN')).toBeInTheDocument();
  expect(screen.getByText('SIGNUP')).toBeInTheDocument();
});
