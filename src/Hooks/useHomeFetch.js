import { useState, useEffect } from 'react'
//API
import API from './API'

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useHomeFetch = () => {
    const [searchItem, setSearchItem] = useState('');
    const [state, setSate] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    console.log(searchTerm)

    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));
        } catch (error) {
            setError(true);
        }
        setLoading(false);
    };

    // Load More
    useEffect(() => {
        if(!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false); 
    }, [isLOadingMore, searchTerm, state.page])

    return { state, loading, error, setSearchTerm, setIsLoadingMore };
};