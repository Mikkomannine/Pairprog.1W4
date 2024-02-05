import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
        <nav>
            <ul>
            <li>
                <Link to="/">Hero</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/services">Services</Link>
            </li>
            <li>
                <Link to="/tours">Tours</Link>
            </li>
            <li>
                <Link to="/footer">Footer</Link>
            </li>
            </ul>
        </nav>
        <Outlet />
        </div>
    );
    }

export default Layout;