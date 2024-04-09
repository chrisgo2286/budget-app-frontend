import React from "react"
import Logout from '../logout/logout';
import { Link } from 'react-router-dom';

export function userLinksLoggedIn (username) {
    return (
        <React.Fragment>
            <div className='greeting' >Hi { username }!</div>
            <Logout />
        </React.Fragment>
    )
}

export function userLinksLoggedOut () {
    return (
        <React.Fragment>
            <Link to='/login' >Login</Link>
            <Link to='/registration' >Register</Link>
        </React.Fragment>
    )
}

export function siteLinksLoggedIn () {
    return (
        <React.Fragment>
            <Link to='/'>Home</Link>
            <Link to='/budget' >Budget</Link>
            <Link to='/ledger' >Ledger</Link>
        </React.Fragment>
    )
}

export function siteLinksLoggedOut () {
    return (
        <React.Fragment>
            <Link to='/login'>Home</Link>
            <Link to='/login'>Budget</Link>
            <Link to='/login'>Ledger</Link>
        </React.Fragment>
    )
}