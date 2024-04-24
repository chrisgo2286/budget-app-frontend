import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { loginUser } from '../../misc/apiCalls';
import { refreshPage } from '../../misc/miscFunctions';
import { updateLocalStorage, updateUser } from '../../misc/userFunctions';
import { validateLogin } from '../../misc/validation/validateLogin';
import Validation from '../validation/validation';
import LoginFields from './loginFields';
import './login.css';

export default function Login () {
    const [ user, setUser ] = useContext(UserContext);
    const navigate = useNavigate();
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: '',
    })
    const [ errors, setErrors ] = useState([])

    async function handleSubmit () {
        const result = validateLogin(credentials);

        if(result === 'Valid') {
            const response = await loginUser(credentials);

            if(response.status && response.status === 200) {
                const token = response.data.key;
                updateLocalStorage(token, credentials.username);
                updateUser(token, credentials.username, user, setUser);
                navigate('/');
                refreshPage();
                
            } else {
                setErrors(['You have entered invalid credentials!']);
            }
        } else {
            setErrors(result);
        }
    }

    return (
        <div className="login">
            <Validation errors={ errors } />
            <LoginFields 
                fields={ credentials } 
                setFields={ setCredentials } 
                handleSubmit={ handleSubmit }/>
        </div>
    )
}