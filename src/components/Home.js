import React, { useState, useEffect } from 'react'
//API
import API from '../API';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components 

// Hook
import { useHomeFetch } from '../hooks/useMovieFetch'

// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const {state, loading, error } = useHomeFetch();

  console.log(state);

  return <div>Home Page</div>
};

export default Home;