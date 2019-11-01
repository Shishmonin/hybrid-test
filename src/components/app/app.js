import React from 'react';
import { connect } from 'react-redux';
import BlogPost from '../blog-post';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { HomePage } from '../pages/';
import Header from '../header';

import './app.css';

const App = () => {
  return (

    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/article/:idArticl"
            render={({ match }) => {
              // console.log(match);
              return  <BlogPost />
            }}/>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = ({ articles }) => {
  return { articles };
};

export default connect(mapStateToProps)(App);