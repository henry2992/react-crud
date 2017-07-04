import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';
import Home from './components/home/Home';
import BlogShow from './components/blogs/Blog';
import BlogNew from './components/blogs/BlogNew';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs/new" component={BlogNew} />
          <Route exact path="/blog/:id" component={BlogShow} />
        </div>
      </Router>
    );
  }
}

export default App;
