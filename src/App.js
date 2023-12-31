import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/header/NavBar';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import MyProfile from './components/myprofile/MyProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="header-line" />
        <Switch>
          <Route exact path="/" component={Rockets} />
          <Route path="/rockets" component={Rockets} />
          <Route path="/missions" component={Missions} />
          <Route path="/my-profile" component={MyProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
