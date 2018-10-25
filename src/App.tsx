import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Footer from './components/layout/Footer';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Route exact={true} path="/" component={Landing} />
            <div className="container">
              <Route exact={true} path="/register" component={Register} />
              <Route exact={true} path="/login" component={Login} />
            </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
