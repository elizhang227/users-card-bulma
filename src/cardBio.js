import React from 'react';

const cardBioStyle = {
    width: '200px',
    background: 'white',
    padding: '16px',
    margin: '3px 3px 3px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
}

const pStyle = {
    wordWrap: 'break-word',
    margin: 0
}

const CardBio = props => {
    const { user } = props;
    return (
        <div className="card" style={cardBioStyle}>
            <p style={pStyle}>{user.location.state}</p>
            <p style={pStyle}>Age: {user.dob.age}</p>
            <p style={pStyle}>#: {user.cell}</p>
        </div>
    )
}

export default CardBio;