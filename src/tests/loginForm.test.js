import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../reducers/index';
import LoginForm from '../containers/LoginForm';

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
      <Provider store={store}>
        <LoginForm />
      </Provider>
    </Router>,
  );
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
  expect(screen.getByText('LOGIN')).toBeInTheDocument();
});
