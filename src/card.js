import React from 'react';

import { Card, CardImage, Image, Content } from 'bloomer';

const ProfileCard = props => {
    const { user } = props;
    return (
        <Card>
            <CardImage>
                <Image isRatio='4:3' src={user.picture.large} />
            </CardImage>
            <Content>
            <p>{user.name.first} {user.name.last}</p>
            </Content>
        </Card>
    )
}

export default ProfileCard;

{/* <div style={topDivStyle}>
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
</div> */}