import React from 'react';
import DarkTheme from 'react-dark-theme';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Header from './components/Header';
import Form from './components/Form';
import CountriesList from './components/CountriesList';

function App() {
  const lightTheme = {
    background: 'hsl(0, 0%, 98%);',
    text: 'hsl(200, 15%, 8%)',
    navbarbg: 'hsl(0, 0%, 100%)',
    navbartext: 'hsl(200, 15%, 8%)',
    inputtext: 'hsl(0, 0%, 52%)',
    inputbg: 'inherit',
    cardbg: 'hsl(0, 0%, 100%)',
    cardtext: 'hsl(200, 15%, 8%)',
    selectbg: 'hsl(0, 0%, 100%)',
    selecttext: 'hsl(200, 15%, 8%)',
  };

  const darkTheme = {
    background: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
    navbarbg: 'hsl(209, 23%, 22%)',
    navbartext: 'hsl(200, 15%, 8%)',
    inputtext: 'hsl(0, 0%, 100%)',
    cardbg: 'hsl(209, 23%, 22%)',
    cardtext: 'hsl(0, 0%, 100%)',
    selectbg: 'hsl(209, 23%, 22%)',
    selecttext: 'hsl(0, 0%, 100%)',
    inputbg: 'hsl(209, 23%, 22%)',
  };
  return (
    <Router>
      <div className="App">
        <nav>
          <Link style={{ color: 'inherit', textDecoration: 'none' }} to="/">
            <h2>Where in the world?</h2>
          </Link>
            <DarkTheme light={lightTheme} dark={darkTheme} />
        </nav>
        {/* <Header /> */}
        
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/:id" exact component={CountriesList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
