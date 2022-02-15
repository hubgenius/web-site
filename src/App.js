// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Component/Website.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Website from './Component/Website';
import Home from './Component/Home';
import About from './Component/About ';
import Contact from'./Component/Contact';
import Info from './Component/Info';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pass from './Component/Pass';

function App() {
  return (
    <div className="App">
<Router>
       <Pass/>
      {/* <Website/> */}
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/Contact' component={Contact}/>
      <Route path='/Info' component={Info}/>


      </Switch>
</Router>
 


       </div>
  );
}

export default App;
