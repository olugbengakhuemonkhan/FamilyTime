import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import axios from 'axios';
import Home from './Home';
import About from './About';
import Timer from './Timer';
import Weather from './Weather';
import Movies from './Movies';
import MyCalendar from './MyCalendar';
import Event from './Event';
import Edit from './Edit';
import DateNow from './DateNow';



class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <NavBar />
          <div className="container center">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/mycalendar" component={MyCalendar} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/timer" component={Timer} />
            <Route exact path="/event" component={Event} />
            <Route exact path="/event/:id" component={Edit} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
