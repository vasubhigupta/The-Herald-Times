import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API_KEY
  // country = "in"
  // category = "sports"
  render() { 
    return (
      <Router>
      <div>
        <Navbar />
          <Routes>
            <Route exact path="/"element={<News apiKey={this.apiKey} key="general" country="in" category="general"  />} />
            <Route exact path="/business"element={<News apiKey={this.apiKey} key="business" country="in" category="business"  />} />
            <Route exact path="/entertainment"element={<News apiKey={this.apiKey} key="entertainment" country="in" category="entertainment"  />} />
            <Route exact path="/general"element={<News apiKey={this.apiKey} key="general" country="in" category="general"  />} />
            <Route exact path="/health"element={<News apiKey={this.apiKey} key="health" country="in" category="health"  />} />
            <Route exact path="/science"element={<News apiKey={this.apiKey} key="science" country="in" category="science"  />} />
            <Route exact path="/sports"element={<News apiKey={this.apiKey} key="sports" country="in" category="sports"  />} />
            <Route exact path="/technology"element={<News apiKey={this.apiKey} key="technology" country="in" category="technology"  />} />
  
          </Routes>
      </div>
      </Router>
    )
  }
}
