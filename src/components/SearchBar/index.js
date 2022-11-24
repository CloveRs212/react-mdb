import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//Image
import searchIcon from '../../images/search-icon.svg';
//styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm}) => {
    const [state, setState] = useState('');
    const inital = useRef(rue);

    useEffect(() => {
        if (inital.current) {
            inital.current = false;
            return;
        }
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)
        return () => clearTimeout(timer)
    },[setSearchTerm, state]);

    return (
        <wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input 
                    type='text' 
                    placeholder='Search Movie' 
                    onChange={event => setState(event.currentTarget.value)}
                    value={state} 
                />
            </Content>
        </wrapper>
    );
};

SearchBar.propTypes = {
    callback: PropTypes.func
};

export default SearchBar;