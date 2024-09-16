import React from "react"
import Logout from '../logout/logout';
import { Link } from 'react-router-dom';

export function userLinksLoggedIn (username: string): JSX.Element {
    return (
        <React.Fragment>
            <div 
                className='greeting' 
                data-cy='greeting' >
                Hi { username } !
            </div>
            <Logout />
        </React.Fragment>
    )
}

export function userLinksLoggedOut (): JSX.Element {
    return (
        <React.Fragment>
            <Link to='/login' data-cy='login-link'>Login</Link>
            <Link to='/registration' data-cy='registration-link'>Register</Link>
        </React.Fragment>
    )
}

export function siteLinksLoggedIn (): JSX.Element {
    return (
        <React.Fragment>
            <Link to='/' data-cy='home-link'>Home</Link>
            <Link to='/budget' data-cy='budget-link'>Budget</Link>
            <Link to='/ledger' data-cy='ledger-link'>Ledger</Link>
            <Link to='/reports' data-cy='reports-link'>Reports</Link>
            <Link to='/import' data-cy='import-link'>Import</Link>
        </React.Fragment>
    )
}

export function siteLinksLoggedOut (): JSX.Element {
    return (
        <React.Fragment>
            <Link to='/'>Home</Link>
            <Link to='/login'>Budget</Link>
            <Link to='/login'>Ledger</Link>
            <Link to='/login'>Reports</Link>
            <Link to='/login'>Import</Link>
        </React.Fragment>
    )
}