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
import { LoginFieldsTypes } from './loginTypes';

export default function Login (): JSX.Element {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [ credentials, setCredentials ] = useState<LoginFieldsTypes>({
        username: '',
        password: '',
    })
    const [ errors, setErrors ] = useState<string[]>([])

    async function handleSubmit (): Promise<void> {
        const result = validateLogin(credentials);

        if(result === 'Valid') {
            const response = await loginUser(credentials);

            if(typeof response !== "string" && response.status === 200) {
                const token = response.token;
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
        <main className="login-page">
            <div className="login" data-cy='login'>
                <div className="login-header" data-cy='login-header'>Login</div>
                <Validation errors={ errors } />
                <LoginFields 
                    fields={ credentials } 
                    setFields={ setCredentials } 
                    handleSubmit={ handleSubmit }/>
            </div>
        </main>
        
    )
}