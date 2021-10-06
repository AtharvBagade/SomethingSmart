import React from 'react';
import Image from '../Images/Contact.png';

export const Contact = () => {
    return (
        <div className="Contact">

           

        <div className="contact-contain">
            <span id="head">
                Contact us!
            </span>

            <input type="text" id="name" placeholder="Name"></input>
            <input type="text" id="subject" placeholder="Subject"></input>
            <input type="email" id="email" placeholder="Email"></input>
            <textarea id="message" placeholder="message" />

            <button type="submit">Submit</button>
            </div>

            <img src={Image} alt="eh" />
        </div>
    )
}
