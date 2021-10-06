import React from 'react';

export const LandingPage = () => {
    return (
        <div className="Contain">

            <div className="text3">
                Join your fellow nerds today in SomethingSmart! 
                <br />
               
                <ul className="download-buttons">
                    <li className="download-btn">
                        <a href="https://play.google.com/store">
                     <div className="download android">
                      <i className="fa fa fa-android fa-3x"></i>
                     </div>
                     </a>
                    </li>
                    <li className="download-btn">
                        <a href="https://www.apple.com/in/app-store/">
                     <div className="download apple">
                      <i className="fa fa fa-apple fa-3x"></i>
                     </div>
                     </a>
                    </li>
                    <li className="download-btn">
                        <a href="https://www.microsoft.com/en-in/store/apps/windows">
                    <div className="download windows">
                    <i className="fa fa fa-windows fa-3x"></i>
                   </div>
                   </a>
                   </li>
                   </ul>
            </div>

           
        </div>
    )
}
