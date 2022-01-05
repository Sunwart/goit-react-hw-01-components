import PropTypes from 'prop-types';
import userImg from './default-user.png';

import {
  ProfileContainer,
  MainProfileInfo,
  Photo,
  UserName,
  NickName,
  Location,
  StatsContainer,
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

      <StatsContainer>
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
      </StatsContainer>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
