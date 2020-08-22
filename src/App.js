import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from'./About';
import WritePost from './WritePost';

import {Route, Link, Router, withRouter ,Switch} from 'react-router-dom';

class App extends React.Component {
  render (){
  return(

   <div>
    <h1>What is on Chen's mind???</h1>  
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>              
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/art">Art</Link></li>
            <li><Link to="/tech">Tech</Link></li>
            <li><Link to="/everythingelse">Everything else</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/writeapost">Write a Post</Link></li>
        </ul>

    </nav>
   <Switch>
      <Route path="/" exact><Home/></Route>
      <Route path="/about"><About/></Route>
      <Route path="/writeapost"><WritePost/></Route>
    </Switch>
  
</div>
  )
  }
}

export default App;
