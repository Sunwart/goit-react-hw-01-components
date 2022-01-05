import PropTypes from 'prop-types';
import userImg from './default-user.png';

import {
  ProfileContainer,
  MainProfileInfo,
  Photo,
  UserName,
  NickName,
  Location,
  Stats,
  StatsLabel,
  StatsNumber,
} from './Profile.styled';

function Profile({
  avatar = userImg,
  username,
  tag,
  location,
  stats: { followers = 0, views = 0, likes = 0 },
}) {
  return (
    <ProfileContainer>
      <MainProfileInfo>
        <Photo src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <NickName>@{tag}</NickName>
        <Location>{location}</Location>
      </MainProfileInfo>

      <Stats>
        <li>
          <StatsLabel>Followers</StatsLabel>
          <StatsNumber>{followers}</StatsNumber>
        </li>
        <li>
          <StatsLabel>Views</StatsLabel>
          <StatsNumber>{views}</StatsNumber>
        </li>
        <li>
          <StatsLabel>Likes</StatsLabel>
          <StatsNumber>{likes}</StatsNumber>
        </li>
      </Stats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
