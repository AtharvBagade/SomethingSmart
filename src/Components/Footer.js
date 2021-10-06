import React from 'react'

export const Footer = () => {

     function scrollTop()
     {
         window.scrollTo(0,0);
     }

    return (
        <div className="Footer">
           
        <ul>

        <li onClick={scrollTop}>Back to Top</li>

        <li><a href="https://en.wikipedia.org/wiki/Terms_of_service">Terms & Conditions</a></li>

        <li><a href="https://www.instagram.com/elementsbyatharv/">Instagram</a></li>

        <li><a href="https://www.instagram.com/elementsbyatharv/">Twitter</a></li>

        <li><a href="https://mail.google.com/">Mail</a></li>
        
        <li><a href="https://storyset.com/data">Illustrations by Storyset</a></li>
        
        </ul>
        
        </div>
    );
};
