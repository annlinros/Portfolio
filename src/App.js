import React from 'react';
import {  Route, Switch } from "react-router-dom";

import './App.css';
import Navigation from './Components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route>
          {/* <About /> */}
        </Route>
        <Route>
          {/* <Projects /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
