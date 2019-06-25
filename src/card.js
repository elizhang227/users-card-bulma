import React from 'react';

const cardStyle = {
    padding: '16px',
    background: 'linear-gradient(to bottom, #384350, #384350 45%, white 45%)',
    display: 'inline-block',
    width: '200px',
    height: '250px',
    margin: '3px 3px 0',
    borderTopRightRadius: '3px',
    borderTopLeftRadius: '3px',
    cursor: 'pointer'
}

const listImgStyle = {
    width: '120px',
    marginTop: '30px',
    border: '4px solid #EFEFEF',
    borderRadius: '3px',
    boxShadow: '3px 3px 3px black'
}

const iconStyle = {
    margin: '0 15px -50px 0'
}

const icon2Style = {
    margin: '0 0 0 15px'
}

const Card = props => {
    const { user } = props;
    return (
        <div>
        <div className="card" style={cardStyle}>
            <i class="far fa-envelope" style={iconStyle}></i>
            <img src={user.picture.large} style={listImgStyle} alt={`${user.name.first} headshot`} />
            <i class="far fa-comment-dots" style={icon2Style}></i>
            <p>{user.name.first} {user.name.last}</p>
        </div>
        </div>
    )
}

export default Card;