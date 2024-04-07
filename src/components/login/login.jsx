import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { loginUser } from '../../misc/apiCalls';
import { refreshPage } from '../../misc/miscFunctions';
import { updateLocalStorage, updateUser } from '../../misc/userFunctions';
import LoginFields from './loginFields';
import './login.css';

export default function Login () {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    })

    async function handleSubmit () {
        const response = await loginUser(credentials);

        if(response.status && response.status === 200) {
            const token = response.data.key;
            updateLocalStorage(token, credentials.username);
            updateUser(token, credentials.username, user, setUser);
            navigate('/');
            refreshPage();
            
        } else {
            console.log('You have entered invalid credentials!')
        }
    }

    return (
        <div className="login">
            <LoginFields fields={ credentials } setFields={ setCredentials } />
            <button onClick={ handleSubmit }>Login</button>
        </div>
    )
}