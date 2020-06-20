import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/header/Header';
import Home from './components/home/Home';
import Movie from './components/movie/Movie';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:movie_id" component={Movie} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;