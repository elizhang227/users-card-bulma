import React from 'react';

const CardList = props => {
    //console.log("props are", props);
    const { userData } = props;
    return (
        <ul>
            <li>
            {userData.username.first}&nbsp;
            {userData.username.last}
            </li>
        </ul>
    )
}

export default CardList;