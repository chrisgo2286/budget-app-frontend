import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, ErrorsContext } from '../../misc/context';
import { registerNewUser } from '../../misc/apiCalls';
import { loginUser } from '../../misc/apiCalls';
import { validateRegistration } from '../../misc/validation/validateRegistration';
import NewUserFields from './newUserFields';
import Validation from '../validation/validation';
import './registration.css';
import { RegistrationTypes } from './registrationTypes';
import { updateLogin } from '../../misc/userFunctions';

export default function Registration (): JSX.Element {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState<RegistrationTypes>({
        username: '',
        password1: '',
        password2: '',
    })
    const { errors, setErrors } = useContext(ErrorsContext)

    async function handleSubmit (): Promise<void> {

        const result = validateRegistration(credentials);

        if(result === 'Valid') {
            const response = await registerNewUser(credentials);
            
            if(response.status === 201) {
                const newUser = {
                    username: credentials.username,
                    isLoggedIn: true,
                    token: response.token,    
                }
                updateLogin(newUser, setUser, navigate)

            } else if(response.status === 204) {
                const loginCredentials = {
                    username: credentials.username,
                    password: credentials.password1
                }

                const response = await loginUser(loginCredentials);

                if(typeof response !== "string" && response.status === 200) {
                    const newUser = {
                        username: credentials.username,
                        isLoggedIn: true,
                        token: response.token
                    }
                    updateLogin(newUser, setUser, navigate)
                }
            }
        } else if (typeof result !== "string") {
            setErrors(result);
        }
    }

    return (
        <main className="registration-page">
            <div className="registration" data-cy='registration'>
                <div className="registration-header">Registration</div>
                <Validation />
                <NewUserFields 
                    fields={ credentials } 
                    setFields={ setCredentials }
                    handleSubmit={ handleSubmit }/>
            </div>
        </main>
        
    )
}