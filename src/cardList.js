import React from 'react';
import PropTypes from 'prop-types';

import Card from './card';

const listStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0
}

const CardList = props => {
    const { userData } = props;
    return (
        <ul style={listStyle}>
            {userData.length > 0 ? 
                userData.map(user => 
                    <li key={user.login.uuid}>
                        <Card user={user} />
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