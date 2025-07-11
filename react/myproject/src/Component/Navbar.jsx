import React from 'react';


import {Link} from 'react-router-dom';
function Navbar(){
return(
    <nav>

<ul class='nav'>
   
    <li><Link to="/" className="nav-link">Home</Link></li>
    <li><Link to="/About"  className="nav-link">About</Link></li>
    <li><Link to="/Contact"  className="nav-link"> Contact</Link></li>
    <li><Link to ="/Services" className="nav-link">Services</Link></li>
    <li><Link to="/Projects"className="nav-link"> Projects</Link></li>
</ul>
</nav>)
};
export default Navbar;