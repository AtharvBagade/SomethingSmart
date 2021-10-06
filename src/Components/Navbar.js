import React from 'react';
import { useState } from 'react';
import {Link} from 'react-scroll';

 const Navbar = () => {

      const[expanded,setExpanded]=useState(false);

    return (
        <>
          <div className={expanded ? "mobile-nav" : "hidden"}>

              <button onClick={() => {setExpanded(!expanded)}}><i className="fas fa-times"></i></button>

              <ul>
              <Link to="About" spy={true} smooth={true} duration={1000}><li onClick={() => {setExpanded(!expanded)}}>About</li></Link>
              <Link to="Courses" spy={true} smooth={true} duration={2000}><li onClick={() => {setExpanded(!expanded)}}>Courses</li></Link>
              <Link to="Contact" spy={true} smooth={true} duration={2500}><li onClick={() => {setExpanded(!expanded)}}>Contact</li></Link>
              </ul>

              </div> 

              <nav>

                 <div className="logo">
                     SomethingSmart
                 </div>

                 
              <ul className="desktop">
              <Link to="About" spy={true} smooth={true} duration={1000}><li>About</li></Link>
              <Link to="Courses" spy={true} smooth={true} duration={2000}><li>Courses</li></Link>
              <Link to="Contact" spy={true} smooth={true} duration={2500}><li>Contact</li></Link>
              </ul>

              <div className="mobile">
                <button onClick={() => {setExpanded(!expanded)}}><i className="fas fa-bars"></i></button>
              </div>

              </nav> 
        </>
    )
}

export default Navbar;