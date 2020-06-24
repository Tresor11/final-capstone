import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupForm from '../containers/SignupFrom';
import LoginForm from '../containers/LoginForm';
import ItemForm from '../containers/ItemForm';
import ItemList from '../containers/ItemList';
import ItemDetails from '../containers/itemDetails';
import Nav from './Nav';
import UserProfile from '../containers/userProfile';
import AdminProfile from '../containers/adminProfile';

const App = () => (
  <div>
    <Nav/>
    <Switch>
      <Route path="/" component={LoginForm} exact />
      <Route path="/signup" component={SignupForm } />
      <Route path="/items" component={ItemList} exact />
      <Route path="/items/:id" component={ItemDetails} />
      <Route path="/profile" component={UserProfile} />
      <Route path="/admin" component={AdminProfile} />
      <Route path="/newitem" component={ItemForm} />
    </Switch>
  </div>
);


export default App;
