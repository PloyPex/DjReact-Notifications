import React from 'react';
import './App.css';

import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'

import NotificationsList from './notifications/NotificationsList'

const indexPage = () => {
  return (
    <Link to={{
      pathname: '/notifications/',
      state: {fromDashboard: false}
    }}>Notifications</Link>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/notifications/' component={NotificationsList} />
          <Route exact path='' component={indexPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
