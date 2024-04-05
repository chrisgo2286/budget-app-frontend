import React, { useContext} from 'react';
import { UserContext } from '../../misc/context';
import { 
    userLinksLoggedIn, 
    userLinksLoggedOut,
    siteLinksLoggedIn,
    siteLinksLoggedOut 
} from './navbarFunctions';
import './navbar.css';

export default function Navbar () {
    const user = useContext(UserContext)[0];
    function handleSiteLinks () {

        return (user.isLoggedIn) ? siteLinksLoggedIn(): siteLinksLoggedOut();
    }

    function handleUserLinks () {
        return (user.isLoggedIn) ? userLinksLoggedIn(user.username): userLinksLoggedOut();
    }

    return (
        <nav>
            <div className='site-links'>
                { handleSiteLinks() }
            </div>
            <div className='user-links'>
                { handleUserLinks() }
            </div>
        </nav>
    )
}