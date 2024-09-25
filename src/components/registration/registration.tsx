import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { registerNewUser } from '../../misc/apiCalls';
import { loginUser } from '../../misc/apiCalls';
import { validateRegistration } from '../../misc/validation/validateRegistration';
import NewUserFields from './newUserFields';
import Validation from '../validation/validation';
import './registration.css';
import { RegistrationTypes } from './registrationTypes';
import { updateLogin } from '../../misc/userFunctions';
import { createNewUserData } from '../../misc/userFunctions';

export default function Registration (): JSX.Element {
    const navigate = useNavigate();
    const { setUser} = useContext(UserContext);
    const [ errors, setErrors ] = useState<string[]>([])
    const [credentials, setCredentials] = useState<RegistrationTypes>(blankCredentials)

    async function handleSubmit (): Promise<void> {
        const result = validateRegistration(credentials);
        (typeof result === "string") ? handleRegistration() : setErrors(result);
    }

    async function handleRegistration () {
        const response = await registerNewUser(credentials);
        if(response.status === 204) {
            handleRegistrationSuccess()
        } else {
            console.log("Error registering this user!")
        }
    }

    async function handleRegistrationSuccess () {
        const loginCredentials = {
            username: credentials.username,
            password: credentials.password1
        }
        const response = await loginUser(loginCredentials)
        if(typeof response !== "string" && response.status === 200) {
            handleLoginSuccess(response.token)
        }
    }

    function handleLoginSuccess (token: string): void {
        const newUser = createNewUserData(credentials.username, token)
        updateLogin(newUser, setUser, navigate)
        setErrors([])
    }

    return (
        <main className="registration-page">
            <div className="registration" data-cy='registration'>
                <div className="registration-header">Registration</div>
                <Validation errors={ errors }/>
                <NewUserFields 
                    fields={ credentials } 
                    setFields={ setCredentials }
                    handleSubmit={ handleSubmit }/>
            </div>
        </main>  
    )
}

const blankCredentials = {
    username: '',
    password1: '',
    password2: '',
}