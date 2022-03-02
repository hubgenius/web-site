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
// import Pass from './Component/Pass';

function App() {
  return (
    <div className="App">
<Router>
       
      {/* <Website/> */}
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/About' component={About}/>
      <Route exact path='/Contact' component={Contact}/>
      <Route exact  path='/:id' component={Info}/>




      </Switch>
     
</Router>
 


       </div>
  );
}

export default App;
