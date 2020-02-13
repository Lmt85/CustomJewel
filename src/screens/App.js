import React from 'react';
import './App.css';
import Nav from './Nav';
import Color from './Color';
import Detail from './Detail';
import Design from './Design';
import Checkout from './Checkout';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Design}/>
        <Route path="/Color" component={Color}/>
        <Route path="/Detail" component={Detail}/>
        <Route path="/Checkout" component={Checkout}/>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
