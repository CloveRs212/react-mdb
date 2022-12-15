import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import RMBDLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles.js';
// Context
import { Context } from '../../context';

const Header = () => {
    const [user] = useContext(Context);
    console.log(user);

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMBDLogo} alt='rmbd-logo' />
                </Link>
                {user ? (
                    <span>Logged In As: {user.username}</span>
                ) : (
                    <Link to='/login'>
                        <span>Log In</span>
                    </Link>
                )
                };

                <TMDBLogoImg src={TMDBLogo} alt='tmdb_logo' />
            </Content>
        </Wrapper>
    )
    };

export default Header;