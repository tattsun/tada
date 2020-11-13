import React from 'react';
import './App.css';
import {
  Route, Switch, BrowserRouter as Router, Redirect,
} from 'react-router-dom';
import TodoListPage from './features/todos/TodoListPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={TodoListPage}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
