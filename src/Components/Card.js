import React from 'react'

export const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.img} alt="course"></img>
            <span className="card-text">
               {props.title}
            </span>
        </div>
    )
}
