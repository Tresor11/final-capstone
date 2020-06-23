import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupForm from '../containers/SignupFrom';
import LoginForm from '../containers/LoginForm';
import ItemList from '../containers/ItemList';
import Nav from './Nav'

const App = () => (
  <div>
    <Nav/>
    <Switch>
      <Route path="/" component={LoginForm} exact />
      <Route path="/signup" component={SignupForm } />
      <Route path="/items" component={ItemList} />
    </Switch>
  </div>
);


export default App;
