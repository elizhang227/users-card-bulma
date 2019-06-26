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
    margin: '105px 15px 0 0',
    color: '#586570'
}

const icon2Style = {
    margin: '105px 0 0 15px'
}

const bottomDivStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px'
}

const topDivStyle = {
    display: 'flex',
    justifyContent: 'space-between',
}

const midDivStyle = {
    display: 'flex',
    justifyContent: 'space-between'
}

const pStyle = {
    margin: 0,
    fontFamily: "'Source Sans Pro', sans-serif"
}

const test = {
    color: 'white'
}

const test2 = {
    color: '#586570'
}

const test3 = {
    color: '#E09F8F'
}

const Card = props => {
    const { user } = props;
    return (
        <div>
            <div className="card" style={cardStyle}>
                <div style={topDivStyle}>
                    <i className="fas fa-ellipsis-v" style={test}></i>
                    <img src="/images/active.png" alt="active"></img>
                    <i className="fas fa-eye" style={test}></i>
                </div>
                <div style={midDivStyle}>
                    <i className="far fa-envelope" style={iconStyle}></i>
                    <img src={user.picture.large} style={listImgStyle} alt={`${user.name.first} headshot`} />
                    <i className="far fa-comment-dots" style={icon2Style}></i>
                </div>
                <div style={bottomDivStyle}>
                    <i className="fas fa-plus" style={test2}></i>
                    <p style={pStyle}>{user.name.first} {user.name.last}</p>
                    <i className="fas fa-heart" style={test3}></i>
                </div>
            </div>
        </div>
    )
}

export default Card;