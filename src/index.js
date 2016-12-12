import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router';

import Layout from './components/LayoutPage.js';
import PeoplePage from './components/PeoplePage.js';



const Home = ()=> <div>I am the home page</div>;


const App = ()=> {
  return (
    <Router history={ hashHistory }>
      <Route path='/' component={Layout}>
        <IndexRoute component={ Home } />
        <Route path='/people' component={PeoplePage} />
        </Route>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));



