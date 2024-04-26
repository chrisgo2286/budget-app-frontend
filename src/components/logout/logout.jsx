import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { logoutUser } from '../../misc/apiCalls';
import { clearUser } from '../../misc/userFunctions';

export default function Logout () {
    
    const [ user, setUser ] = useContext(UserContext);
    const navigate = useNavigate();

    async function handleLogout () {
        if(localStorage.getItem('token') !== '') {
            const response = await logoutUser();
            
            if(response.status === 200) {
                clearUser(user, setUser)
                navigate('/');
            }
        }
    }
    
    return (

            <div
                className='logout'
                onClick={ handleLogout } 
                data-cy='logout'>
                Logout
            </div>

    )
}