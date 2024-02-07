import { Link } from "react-router-dom";

import { Link } from 'react-router-dom';

function Navigation() {
 return (
<nav>
<ul>
 <li>
<Link to="/hero">Hero</Link>
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
 );
}

export default Navigation;