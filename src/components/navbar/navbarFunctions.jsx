import React from "react"
import Logout from '../logout/logout';
import { Link } from 'react-router-dom';

export function userLinksLoggedIn (username) {
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

export function userLinksLoggedOut () {
    return (
        <React.Fragment>
            <Link to='/login' data-cy='login-link'>Login</Link>
            <Link to='/registration' data-cy='registration-link'>Register</Link>
        </React.Fragment>
    )
}

export function siteLinksLoggedIn () {
    return (
        <React.Fragment>
            <Link to='/home' data-cy='home-link'>Home</Link>
            <Link to='/budget' data-cy='budget-link'>Budget</Link>
            <Link to='/ledger' data-cy='ledger-link'>Ledger</Link>
            <Link to='/reports' data-cy='reports-link'>Reports</Link>
        </React.Fragment>
    )
}

export function siteLinksLoggedOut () {
    return (
        <React.Fragment>
            <Link to='/home'>Home</Link>
            <Link to='/login'>Budget</Link>
            <Link to='/login'>Ledger</Link>
            <Link to='/login'>Reports</Link>
        </React.Fragment>
    )
}