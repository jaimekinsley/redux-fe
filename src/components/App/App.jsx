import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Signup from '../auth/Signup';
import ContactsPage from './contacts/ContactsPage';
import Header from '../header/Header';


export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}
