import React from 'react';


export const Section1 = (props) => {
    return (
        <div className="Contain1">
          
          <img src={props.Image} alt="IMG"></img>

          <div className="text">
              <span className="Title">
                 {props.title}
              </span>

              <p>
                  {props.desc}
              </p>
          </div>
            
        </div>
    )
}
