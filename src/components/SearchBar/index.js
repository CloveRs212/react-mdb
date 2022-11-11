import React, { useState, useEffect, useRef } from 'react';
//Image
import searchIcon from '../../images/search-icon.svg';
//styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm}) => {
    const [state, setState] = useState('');

    useEffect(() => {

        const timer = setTimeout(() => {
            setSearchItem(state);
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

export default SearchBar;