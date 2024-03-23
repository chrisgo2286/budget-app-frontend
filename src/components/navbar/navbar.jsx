import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/budget'>Budget</Link>
            <Link to='/ledger'>Ledger</Link>
        </nav>
    )
}