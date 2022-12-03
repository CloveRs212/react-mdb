import React from 'react';
//Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';

//styles
import { GlobalStyle } from './GlobalStyle';

const App = () => (
  <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Movie />}/>
      </Routes>
      <Home />
      <GlobalStyle />
  </Router>
);

export default App;