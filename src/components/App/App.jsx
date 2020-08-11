import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Signup from '../auth/Signup';
import ContactsPage from './contacts/ContactsPage';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}
