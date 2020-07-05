import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../reducers/index';
import ItemForm from '../containers/ItemForm';

test('renders learn react link', () => {
  render(
    <Router>
      <Provider store={store}>
        <ItemForm />
      </Provider>
    </Router>,
  );
  expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('contact')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Price')).toBeInTheDocument();
  expect(screen.getByText(/CREATE ITEM/i)).toBeInTheDocument();
});
