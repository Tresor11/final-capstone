import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';
import ItemPreview from '../components/ItemPreview';

const props = {
  name: 'testing',
  id: 0,
  price: 10,
  image: {
    url: 'testi.jpg',
  },
};

test('renders learn react link', () => {
  render(
    <Router>
      <ItemPreview props={props} />
    </Router>,
  );
  expect(screen.getByText('testing')).toBeInTheDocument();
  expect(screen.getByText(/10/i)).toBeInTheDocument();
});
