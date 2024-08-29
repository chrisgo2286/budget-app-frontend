import { useContext} from 'react';
import { UserContext } from '../../misc/context';
import { 
    userLinksLoggedIn, 
    userLinksLoggedOut,
    siteLinksLoggedIn,
    siteLinksLoggedOut 
} from './navbarFunctions';
import './navbar.css';

export default function Navbar (): JSX.Element {
    const {user} = useContext(UserContext);

    function handleSiteLinks (): JSX.Element {

        return (user.isLoggedIn) ? siteLinksLoggedIn(): siteLinksLoggedOut();
    }

    function handleUserLinks (): JSX.Element {
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