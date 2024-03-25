import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar () {
    return (
        <nav>
            <section className='site-links'>
                <Link to='/'>Home</Link>
                <Link to='/budget'>Budget</Link>
                <Link to='/ledger'>Ledger</Link>
            </section>
            <section className='user-links'>
                <div className="greeting">Hello, Christian</div>
                <a href='#'>Logout</a>
            </section>
        </nav>
    )
}