// Router
import { Link } from 'react-router-dom';

// SCSS
import './nav.scss';

const Nav = () => {
    return (
        <>
        <nav>
            <li className="">
                <Link className="navLink" to="/">Nav Item</Link>
                <Link className="navLink" to="/">Nav Item</Link>
                <Link className="navLink" to="/">Nav Item</Link>
            </li>
        </nav>
        </>
    );
}

export default Nav;