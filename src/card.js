import React from 'react';

const cardStyle = {
    padding: '16px',
    background: 'linear-gradient(to bottom, #384350, #384350 45%, white 45%)',
    display: 'inline-block',
    width: '200px',
    height: '250px',
    margin: '3px 3px 0',
    borderTopRightRadius: '5px',
    borderTopLeftRadius: '5px',
    cursor: 'pointer'
}

const listImgStyle = {
    width: '120px',
    paddingTop: '27px'
}

const Card = props => {
    const { user } = props;
    return (
        <div className="card" style={cardStyle}>
            <img src={user.picture.large} style={listImgStyle} alt={`${user.name.first} headshot`} />
            <p>{user.name.first} {user.name.last}</p>
        </div>
    )
}

export default Card;