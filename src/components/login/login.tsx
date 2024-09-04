import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, ErrorsContext } from '../../misc/context';
import { loginUser } from '../../misc/apiCalls';
import { validateLogin } from '../../misc/validation/validateLogin';
import Validation from '../validation/validation';
import LoginFields from './loginFields';
import './login.css';
import { LoginFieldsTypes } from './loginTypes';
import { createNewUserData, updateLogin } from '../../misc/userFunctions';

export default function Login (): JSX.Element {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [ credentials, setCredentials ] = useState<LoginFieldsTypes>({
        username: '',
        password: '',
    })
    const { setErrors } = useContext(ErrorsContext)
    
    async function handleSubmit (): Promise<void> {
        const result = validateLogin(credentials);
        if(result === 'Valid') {
            handleLogin()
        } else if (typeof result !== "string") {
            setErrors(result);
        }
    }

    async function handleLogin (): Promise<void> {
        const response = await loginUser(credentials);
        if(typeof response !== "string" && response.status === 200) {
            handleLoginSuccess(response.token)
        } else {
            setErrors(['You have entered invalid credentials!']);
        }
    }

    function handleLoginSuccess (token: string): void {
        const newUser = createNewUserData(credentials.username, token)
        updateLogin(newUser, setUser, navigate)
    }

    return (
        <main className="login-page">
            <div className="login" data-cy='login'>
                <div className="login-header" data-cy='login-header'>Login</div>
                <Validation />
                <LoginFields 
                    fields={ credentials } 
                    setFields={ setCredentials } 
                    handleSubmit={ handleSubmit }/>
            </div>
        </main>
        
    )
}