import React from 'react';


export const Section2 = (props) => {
    return (
        <div className="Contain2">
           <div className="text2">
            <span className="Title2">{props.title}</span>
            <p>{props.desc}</p>
           </div>

         <img src={props.Image} alt="eh"/>
            
        </div>
    )
}
