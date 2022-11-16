import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header';
import Home from './components/Home'

//styles
import { GlobalStyle } from './GlobalStyle'

const App = () => (
  <Router>
      <Header />
      <Home />
      <GlobalStyle />
  </Router>
);

export default App;