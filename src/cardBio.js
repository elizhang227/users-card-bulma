import React from 'react';

const cardBioStyle = {
    width: '200px',
    background: 'white',
    padding: '16px',
    margin: '4px 3px 3px',
    borderBottomLeftRadius: '3px',
    borderBottomRightRadius: '3px',
}

const bioInfoStyle = {
    //wordWrap: 'break-word',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    fontSize: '12px'
}

const pStyle = {
    margin: 0,
    fontFamily: "'Source Sans Pro', sans-serif"
}

const CardBio = props => {
    const { user } = props;
    return (
        <div className="card" style={cardBioStyle}>
            <div style={bioInfoStyle}>
                <p style={pStyle}><b>Location:</b> {user.location.city}, {user.location.state}</p>
                <p style={pStyle}><b>Age:</b> {user.dob.age}</p>
                <p style={pStyle}><b>Phone:</b> {user.cell}</p>
            </div>
        </div>
    )
}

export default CardBio;