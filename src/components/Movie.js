import React from 'react';
import { useParams } from 'react-router-dom';
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import BreadCrumb from './BreadCrumb';
import Grid from './Grid';
import Spinner from './Spinner';
// Hook
import { useMovieFetch } from '../Hooks/useMovieFetch';
//Image
import NoImage from '../images/NoImage';

const Movie = () => {
    const { movieId } = useParams();

    const {state: movie, loading, error } = useMovieFetch(movieId)

    if (loading) return <Spinner />
    if (error) return <div>Something Went Wrong</div>
    
    return (
        <>
            <BreadCrumb movieTitle={movie.oringinal_title} />
        </>
    );
};

export default Movie;