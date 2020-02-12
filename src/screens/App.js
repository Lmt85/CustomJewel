import React from 'react';
import './App.css';
import Nav from './Nav';
import RingColor from './RingColor';
import RingDetail from './RingDetail';
import Dashboard from '../components/dashboard/Dashboard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/RingColor" component={RingColor}/>
        <Route path="/RingDetail" component={RingDetail}/>
        </Switch>
      </div>
    </Router>    
  );
}

const Home = () => (
  <div>
    < Dashboard />
  </div>
);

export default App;
