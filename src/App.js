import React from 'react';
import Home from './views/Home';
import About from './views/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { UserProvider } from './context/user/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Router>
    </UserProvider>
  );
}

export default App;
