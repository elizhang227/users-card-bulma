import React from 'react';
import PropTypes from 'prop-types';

import ProfileCard from './card';
// import CardBio from './cardBio';

import { Section, Columns, Column } from 'bloomer';

const CardList = props => {
    const { userData } = props;
    return (
        <Section>
            <Columns>
                {userData.length > 0 ? 
                    userData.map(user => 
                        <Column>
                            <ProfileCard user={user} />
                            {/* <CardBio user={user} /> */}
                        </Column>
                    )
                :
                    <Column>No User Data</Column>
                }
            </Columns>
        </Section>
    )
}

export default CardList;

CardList.propTypes = {
    userData: PropTypes.array
}
