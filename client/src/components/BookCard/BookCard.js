import React from 'react';

const BookCard = (props) => {
    return(
        <div className="card-container">
            <div className="image">
                <img src={props.image} alt=""/>   
            </div>
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <a href={props.link} target="_blank" rel="noreferrer">View Book</a>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default BookCard;