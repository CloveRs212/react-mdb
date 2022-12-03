import React from 'react'
// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
// Components 
import HeroImage from './HeroImage';
import Grid from './Grid';
import Thumb from './Thumb';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';
// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';
// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
  const {state, loading, error, searchTerm, setSearchItem, setIsLoadingMore } = useHomeFetch();

  console.log(state);

  if (error) return <div>Something Went Wrong ..</div>;

  return ( 
    <>
        {!searchTerm && state.results[0] ? (
            <HeroImage 
                image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                title={state.results[0].original_title}
                text={state.results[0].overview}
                />
        ) : null}
        <SearchBar setSearchItem={setSearchItem} />
        <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
          {state.results.map(movie => (
            <Thumb
              movieId={movie.id}
              Key={movie}
              clickable
              image={
                movie.poster_path
                  ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                  : NoImage
              }
              />
          ))}
        </Grid>
        {loading && <Spinner />}
        {state.page < state.total_pages && !loading && (
          <Button text='Load More' callback={() => setIsLoadingMore(true)} />
        )}
    </>
  );
};

export default Home;