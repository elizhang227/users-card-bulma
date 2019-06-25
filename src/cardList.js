import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';
import CardBio from './cardBio';

const listStyle = {
    listStyleType: 'none',
    display: 'flex',
    flexWrap: 'wrap'
}

const liStyle = {
    margin: '10px'
}


const CardList = props => {
    const { userData } = props;
    return (
        <ul style={listStyle}>
            {userData.length > 0 ? 
                userData.map(user => 
                    <li key={user.login.uuid} style={liStyle}>
                        <Card user={user} />
                        <CardBio user={user} />
                    </li>
                )
            :
                <li>No User Data</li>
            }
        </ul>
    )
}

export default CardList;

CardList.propTypes = {
    userData: PropTypes.array
}
