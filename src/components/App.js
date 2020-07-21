import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupForm from '../containers/SignupFrom';
import LoginForm from '../containers/LoginForm';
import ItemForm from '../containers/ItemForm';
import ItemList from '../containers/ItemList';
import ItemDetails from '../containers/itemDetails';
import UserProfile from '../containers/userProfile';
import AdminProfile from '../containers/adminProfile';
import EditProfile from '../containers/EditProfile';
import EditItem from '../containers/EditItem';
import Home from './Home';

const App = () => (
  <div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={LoginForm} />
      <Route path="/signup" component={SignupForm} />
      <Route path="/items" component={ItemList} exact />
      <Route path="/items/:id" component={ItemDetails} exact />
      <Route path="/profile" component={UserProfile} />
      <Route path="/admin" component={AdminProfile} />
      <Route path="/newitem" component={ItemForm} />
      <Route path="/edit-profile" component={EditProfile} />
      <Route path="/items/:id/edit" component={EditItem} />
    </Switch>
  </div>
);

export default App;
