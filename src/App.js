import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={ Welcome }/>
        </Switch>
      </div>
    );
  }
}

export default App;