import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {LocaleProvider} from 'antd-mobile'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes'

class App extends React.Component {
  render() {
    return (
      <LocaleProvider>
        <Router>
          <Routes></Routes>
        </Router>
      </LocaleProvider>
    );
  }
}

export default connect()(App);