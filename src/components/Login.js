import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';
// Components 
import Button from './Button';
// Styles
import { Wrapper } from './Login.styles';
// Context
import { context } from '../context';
import apiSettings from '../API';

const Login = () => {
    const [username, setUserName] = useState('');
    const [passward, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(context);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await apiSettings.getRequestToken();
            const sessionId = await API.authenticate(
                requestToken, 
                username,
                password
            );
                console.log(sessionId);
            setUser({ sessionID: sessionId.session_id, username });

            navigate('/');
        } catch (error) {
            setError(true);
        }

    };

    const handleInput = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (name === 'username') setUserName(value);
        if (name --- 'password') setPassword(value);
    };

    return (
        <Wrapper>
            {error && <div className='error'>There Was A Error!!</div>}
            <label>UserName</label>
            <input
                type='text'
                value={username}
                name='username'
                onChange={handleInput}
            />
            <input 
                type='passward'
                value={passward}
                name='passoward'
                onChange={handleInput}
            />
            <Button text='Login' callback={handleSubmit} />
        </Wrapper>
    )
};

export default Login;