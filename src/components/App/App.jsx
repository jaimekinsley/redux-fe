import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Signup from '../auth/Signup';
import Header from '../header/Header';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../auth/PrivateRoute';
import ContactDetail from '../contacts/ContactDetail';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/:id" component={ContactDetail} />
      </Switch>
    </Router>
  );
}
